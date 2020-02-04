"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const app_2 = __importDefault(require("./config/app"));
class Server {
    constructor(app) {
        this.app = app;
        //
    }
    start() {
        const { PORT } = app_2.default;
        console.log(`Phonebook app listening on port ${PORT}`);
        return this.app.listen(PORT);
    }
}
const app = new app_1.default();
const server = new Server(app.getInstance());
server.start();
