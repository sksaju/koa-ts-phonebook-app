import Koa from "koa";
import mongoose from "mongoose";
import App from "./app";

class Server {
    constructor(public app: Koa) {
    }

    public start() {
        const port = process.env.PORT || 3000;
        process.stdout.write(`Phonebook app listening on port ${port}`);

        mongoose.Promise = global.Promise;
        mongoose.connect('mongodb://mongo/Phonebook', {
            useNewUrlParser: true }
        )
        .then(() => console.log('MongoDB Connected'))
        .catch(err => console.log(err));

        return this.app.listen(port);
    }
}

const app = new App();
const server = new Server(app.getInstance());
server.start();