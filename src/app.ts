import Application from "koa";
import cors from "@koa/cors";
import bodyParser from "koa-bodyparser";
import mongoose from "mongoose";
import routes from './routes';

class App {

    public app: Application;

    constructor() {
        this.app = new Application();
        this._setConfig();
        this._setMongoConfig();
    }

    private _setConfig() {
        this.app.use(cors());
        this.app.use(bodyParser());
        this.app.use(routes());
    }

    private _setMongoConfig() {
        mongoose.Promise = global.Promise;
        mongoose.connect('mongodb://mongo/Phonebook', {
            useNewUrlParser: true
        })
        .then(() => console.log('MongoDB Connected'))
        .catch(err => console.log(err));
    }

    public getInstance(): Application {
        return this.app;
    }
}

export default App;