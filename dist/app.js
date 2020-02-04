"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const cors_1 = __importDefault(require("@koa/cors"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./config/app"));
const routes_1 = __importDefault(require("./routes"));
class App {
    constructor() {
        this.app = new koa_1.default();
        this._setConfig();
        this._setMongoConfig();
    }
    _setConfig() {
        this.app.use(cors_1.default());
        this.app.use(koa_bodyparser_1.default());
        this.app.use(routes_1.default());
    }
    _setMongoConfig() {
        const { MONGO_URL } = app_1.default;
        mongoose_1.default.Promise = global.Promise;
        mongoose_1.default.connect(MONGO_URL, {
            useNewUrlParser: true
        })
            .then(() => console.log('MongoDB Connected'))
            .catch(err => console.log(err));
    }
    getInstance() {
        return this.app;
    }
}
exports.default = App;
