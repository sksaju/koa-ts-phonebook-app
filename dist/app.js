"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const cors_1 = __importDefault(require("@koa/cors"));
//import Router from "koa-router";
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const routes_1 = __importDefault(require("./routes"));
class App {
    constructor() {
        this.app = new koa_1.default();
        this.app
            .use(cors_1.default())
            .use(koa_bodyparser_1.default())
            .use(routes_1.default.routes());
    }
    getInstance() {
        return this.app;
    }
}
exports.default = App;
