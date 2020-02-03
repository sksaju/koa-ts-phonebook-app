"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const ContactController_1 = __importDefault(require("../controllers/ContactController"));
const router = new koa_router_1.default();
const { findAll, create, findByMobile, update, remove } = new ContactController_1.default();
//CONTACT ROUTES
router.get('/contact/', findAll);
router.post('/contact/', create);
router.get('/contact/:mobile', findByMobile);
router.post('/contact/:mobile', update);
router.delete('/contact/:mobile', remove);
exports.default = koa_router_1.default;
