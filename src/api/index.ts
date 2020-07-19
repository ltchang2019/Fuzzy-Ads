import express from 'express';
import { Client, KeyInfo, ThreadID, JSONSchema } from '@textile/hub';
import Publisher from '../types';
import * as ethUtil from 'ethereumjs-util';
import * as sigUtil from 'eth-sig-util';
const { API_KEY, API_SECRET, DB_ID } = require('../../config');

const app = express();
const threadId = ThreadID.fromString(DB_ID);

async function getClient() {
    const keyInfo: KeyInfo = {
        key: API_KEY,
        secret: API_SECRET
    };

    return await Client.withKeyInfo(keyInfo);
}

app.get('/api/users/:publicKey', async (req, res) => {
    const publicKey = req.params.publicKey;
    const client = await getClient();  //how to not call this every endpoint???

    try {
        const exists = await client.findByID(threadId, "Publishers", publicKey);
        res.send(exists.instance);
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
    const { _id, nonce } = req.body;

})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});