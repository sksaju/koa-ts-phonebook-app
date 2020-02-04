import Koa from "koa";
import App from "./app";

class Server {
    constructor(public app: Koa) {
        //
    }

    public start() {
        const port = process.env.PORT || 3000;
        console.log(`Phonebook app listening on port ${port}`)
        return this.app.listen(port);
    }
}

const app = new App();
const server = new Server(app.getInstance());
server.start();