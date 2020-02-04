import Koa from "koa";
import App from "./app";
import appConfig from './config/app';

class Server {
    constructor(public app: Koa) {
        //
    }

    public start() {
        const { PORT } = appConfig;
        console.log(`Phonebook app listening on port ${PORT}`)
        return this.app.listen(PORT);
    }
}

const app = new App();
const server = new Server(app.getInstance());
server.start();