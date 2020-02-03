"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const ContactController_1 = __importDefault(require("./controllers/ContactController"));
const routers = new koa_router_1.default();
const { findAll, create, findByMobile, update, remove } = new ContactController_1.default();
//CONTACT ROUTES
routers.get('/contact/', findAll);
routers.post('/contact/', create);
routers.get('/contact/:mobile', findByMobile);
routers.post('/contact/:mobile', update);
routers.delete('/contact/:mobile', remove);
exports.default = routers;
