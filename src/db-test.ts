import { Client, KeyInfo, ThreadID, JSONSchema } from '@textile/hub';
import Publisher from './types';
const { API_KEY, API_SECRET, DB_ID } = require('../config');

async function getClient() {
    const keyInfo: KeyInfo = {
        key: API_KEY,
        secret: API_SECRET
    };

    return await Client.withKeyInfo(keyInfo);
}

async function createDB(client: Client) {
    const threadId = ThreadID.fromRandom();

    await client.newDB(threadId);
  
    return threadId.toString();
}

async function stringToID(str: string) {
    return ThreadID.fromString(str);
}

async function listDBs(client: Client) {
    return await client.listThreads();
}

async function deleteThread(client: Client, threadID: string) {
    const id = await stringToID(threadID);
    client.deleteDB(id);
}

async function createCollection(client: Client, name: string, schema: JSONSchema) {
    const id = await stringToID(DB_ID);
    return await client.newCollection(id, name, schema);
}

async function listCollection(client: Client, name: string) {
    const id = await stringToID(DB_ID);
    return await client.find(id, name, {});
}

async function createEntity (client: Client, jsonData: any) {
    const threadId = await stringToID(DB_ID);

    const ids = await client.create(threadId, 'Publishers', [
      jsonData,
    ]);
    return await listCollection(client, "Publishers");
}

async function deleteCollection(client: Client, name: string) {
    const threadId = await stringToID(DB_ID);
    client.deleteCollection(threadId, name);
}


async function updateCollection() {
    const client = await getClient();
    await deleteCollection(client, "Publishers");
    await createCollection(client, "Publishers", Publisher);
}

const jsonData = {
    _id: 'twitter-key',
    nonce: 1234,
    website: 'twitter.com'
}

// getClient()
//     .then(client => listCollection(client, "Publishers"))
//     .then(console.log)

// getClient()
//     .then(client => createEntity(client, jsonData))
//     .then(console.log)

// createEntity(jsonData).then(console.log);
// listCollection("Publishers").then(console.log);

// const id = stringToID('bafk7yqrweq2ofsnqy6oqcypgleeekc3glksrrxnmgsxam7kvkktvexi')
//     .then(createCollection)
//     .then(console.log);

// deleteThread('bafky7upcapbuolbv7lgktmnuuaagnkaznxtjd4odltku2nilr32hdvq').then(() => listDBs());
// const id = threadIDToString('bafk56q2wfmyc2ejjrp7hotpiattvnkzzkbsfpxz7dyen5ggp2n7jali')
// createDB().then(console.log);