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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const ContactController_1 = __importDefault(require("./controllers/ContactController"));
const app_1 = __importDefault(require("./config/app"));
exports.default = () => {
    const router = new koa_router_1.default();
    router.get('/', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
        ctx.body = app_1.default.DEFAULT_LIVE_MESSAGE;
    }));
    /* contact apis */
    const contactUrl = '/api/contacts/';
    router.get(contactUrl, ContactController_1.default.findAll);
    router.post(contactUrl, ContactController_1.default.create);
    router.get(`${contactUrl}:mobile`, ContactController_1.default.findByMobile);
    router.put(`${contactUrl}:mobile`, ContactController_1.default.update);
    router.delete(`${contactUrl}:mobile`, ContactController_1.default.remove);
    return router.routes();
};
