"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
class Server {
    constructor(app) {
        this.app = app;
    }
    start() {
        const port = process.env.PORT || 3000;
        process.stdout.write(`Phonebook app listening on port ${port}`);
        mongoose_1.default.Promise = global.Promise;
        mongoose_1.default.connect('mongodb://mongo/Phonebook', {
            useNewUrlParser: true
        })
            .then(() => console.log('MongoDB Connected'))
            .catch(err => console.log(err));
        return this.app.listen(port);
    }
}
const app = new app_1.default();
const server = new Server(app.getInstance());
server.start();
