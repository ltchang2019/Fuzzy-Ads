import { JSONSchema } from "@textile/hub";

const Publisher: JSONSchema = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    title: 'Publisher',
    type: 'object',
    properties: {
        _id: { type: 'string'},
        nonce: { type: 'integer' },
        website: { type: 'string' }
    }
}

export default Publisher;