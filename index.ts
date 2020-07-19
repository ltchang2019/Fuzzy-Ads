import express from 'express';
import { Client, KeyInfo, ThreadID, JSONSchema } from '@textile/hub';
import Publisher from './src/types';
import * as ethUtil from 'ethereumjs-util';
import * as sigUtil from 'eth-sig-util';
import bodyParser from 'body-parser';
const { API_KEY, API_SECRET, DB_ID } = require('./config');

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

app.get('/api/users/:publicKey', async (req, res) => {
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
        client.create(threadId, "Publishers", [newPublisher]);
        res.send(newPublisher);
    }
});

app.post('/api/auth', async (req, res) => {
    const { _id, signature } = req.body;
    console.log(req.body);

    // const client = await getClient();
    // const user = await client.findByID(threadId, "Publishers", _id);
    // if ecrecover(message & nonce, sig), the authenticated!

});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});