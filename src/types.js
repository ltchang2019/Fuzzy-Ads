"use strict";
exports.__esModule = true;
var Publisher = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    title: 'Publisher',
    type: 'object',
    properties: {
        _id: { type: 'string' },
        nonce: { type: 'integer' },
        website: { type: 'string' }
    }
};
exports["default"] = Publisher;
