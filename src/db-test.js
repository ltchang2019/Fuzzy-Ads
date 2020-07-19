"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var hub_1 = require("@textile/hub");
var types_1 = __importDefault(require("./types"));
var _a = require('../config'), API_KEY = _a.API_KEY, API_SECRET = _a.API_SECRET, DB_ID = _a.DB_ID;
function getClient() {
    return __awaiter(this, void 0, void 0, function () {
        var keyInfo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    keyInfo = {
                        key: API_KEY,
                        secret: API_SECRET
                    };
                    return [4 /*yield*/, hub_1.Client.withKeyInfo(keyInfo)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function createDB(client) {
    return __awaiter(this, void 0, void 0, function () {
        var threadId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    threadId = hub_1.ThreadID.fromRandom();
                    return [4 /*yield*/, client.newDB(threadId)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, threadId.toString()];
            }
        });
    });
}
function stringToID(str) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, hub_1.ThreadID.fromString(str)];
        });
    });
}
function listDBs(client) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client.listThreads()];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function deleteThread(client, threadID) {
    return __awaiter(this, void 0, void 0, function () {
        var id;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, stringToID(threadID)];
                case 1:
                    id = _a.sent();
                    client.deleteDB(id);
                    return [2 /*return*/];
            }
        });
    });
}
function createCollection(client, name, schema) {
    return __awaiter(this, void 0, void 0, function () {
        var id;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, stringToID(DB_ID)];
                case 1:
                    id = _a.sent();
                    return [4 /*yield*/, client.newCollection(id, name, schema)];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function listCollection(client, name) {
    return __awaiter(this, void 0, void 0, function () {
        var id;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, stringToID(DB_ID)];
                case 1:
                    id = _a.sent();
                    return [4 /*yield*/, client.find(id, name, {})];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function createEntity(client, jsonData) {
    return __awaiter(this, void 0, void 0, function () {
        var threadId, ids;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, stringToID(DB_ID)];
                case 1:
                    threadId = _a.sent();
                    return [4 /*yield*/, client.create(threadId, 'Publishers', [
                            jsonData,
                        ])];
                case 2:
                    ids = _a.sent();
                    return [4 /*yield*/, listCollection(client, "Publishers")];
                case 3: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function deleteCollection(client, name) {
    return __awaiter(this, void 0, void 0, function () {
        var threadId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, stringToID(DB_ID)];
                case 1:
                    threadId = _a.sent();
                    client.deleteCollection(threadId, name);
                    return [2 /*return*/];
            }
        });
    });
}
function updateCollection() {
    return __awaiter(this, void 0, void 0, function () {
        var client;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getClient()];
                case 1:
                    client = _a.sent();
                    return [4 /*yield*/, deleteCollection(client, "Publishers")];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, createCollection(client, "Publishers", types_1["default"])];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
var jsonData = {
    _id: 'twitter-key',
    nonce: 1234,
    website: 'twitter.com'
};
getClient()
    .then(function (client) { return listCollection(client, "Publishers"); })
    .then(console.log);
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
