import Application from "koa";
import cors from "@koa/cors";
//import Router from "koa-router";
import bodyParser from "koa-bodyparser";
import routers from './routes';

class App {

    public app: Application;

    constructor() {
        this.app = new Application();

        this.app
            .use(cors())
            .use(bodyParser())
            .use(routers.routes());
    }

    public getInstance(): Application {
        return this.app;
    }
}

export default App;