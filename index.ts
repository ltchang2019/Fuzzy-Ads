import express, { NextFunction } from 'express';
import { Client, KeyInfo, ThreadID, JSONSchema } from '@textile/hub';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import { AuthInfo } from './reqDefinitions';
import { recoverPersonalSignature } from 'eth-sig-util';
import { bufferToHex } from 'ethereumjs-util';

const { API_KEY, API_SECRET, DB_ID, JWT_SECRET } = require('./config');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', ['GET', 'POST']);
    res.header('Access-Control-Allow-Headers', '*');
    next();
});

const threadId = ThreadID.fromString(DB_ID);

async function getClient() {
    const keyInfo: KeyInfo = {
        key: API_KEY,
        secret: API_SECRET
    };

    return await Client.withKeyInfo(keyInfo);
}

// ______________ROUTES________________

app.get('/users/:publicKey', async (req, res) => {
    const publicKey = req.params.publicKey;
    const client = await getClient();  //how to not call this every endpoint???

    try {
        const user = await client.findByID(threadId, "Publishers", publicKey);
        res.send(user.instance);
    } catch {
        const newPublisher = {
            _id: publicKey,
            nonce: Math.floor(Math.random() * 10000),
            website: ""
        }
        await client.create(threadId, "Publishers", [newPublisher]);
        res.send(newPublisher);
    }
});

app.post('/users/auth', async (req, res) => {
    const { _id, signature } = req.body;

    //get user from db again
    const client = await getClient();
    const user = await client.findByID(threadId, "Publishers", _id);
    const msg = `I am signing my one-time nonce: ${user.instance.nonce}`;

    //recover signature
    const msgBufferHex = bufferToHex(Buffer.from(msg, 'utf8'));
    const address = recoverPersonalSignature({
      data: msgBufferHex,
      sig: signature,
    });

    //check sig and public key match
    if (address.toLowerCase() !== _id.toLowerCase()) {
      res.status(401).send({ error: 'Signature verification failed' });
    }

    //insert jwt if successful
    const accessToken = jwt.sign(_id, JWT_SECRET);
    res.json({ token: accessToken });
});

app.get('/users/publisher', verifyToken, (req: AuthInfo, res: any) => {
    jwt.verify(req.token, JWT_SECRET, (err: any, authData: any) => {
        if(err) {
            res.sendStatus(403);
        } else {
            res.json("Hello Publisher!")
        }
    })
});

function verifyToken(req: any, res: any, next: any) {
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined') {
        const bearerToken = bearerHeader.split(' ')[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});