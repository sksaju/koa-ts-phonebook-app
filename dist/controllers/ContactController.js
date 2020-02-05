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
const Contact_1 = __importDefault(require("../models/Contact"));
const contactValidator_1 = __importDefault(require("../validators/contactValidator"));
class ContactController {
    /**
     * Get all contacts
     * @param     {object}  ctx
     * @access    public
     * @return    {json} mixed
     */
    static findAll(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const contacts = yield Contact_1.default.find();
            ctx.status = 200;
            ctx.body = contacts;
        });
    }
    /**
     * Get single contact by mobile number
     * @param     {object}  ctx
     * @access    public
     * @return    {json} mixed
     */
    static findByMobile(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const { mobile } = ctx.params;
            const contact = yield Contact_1.default.find({ mobile });
            if (contact) {
                ctx.status = 200;
                ctx.body = contact;
            }
            else {
                ctx.status = 404;
                ctx.body = 'Data not found';
            }
        });
    }
    /**
     * Create contact
     * @param     {object}  ctx
     * @access    public
     * @return    {json} mixed
     */
    static create(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const { body, body: { name, email, mobile } } = ctx.request;
            const validate = contactValidator_1.default(body);
            const exist = yield Contact_1.default.find({ mobile });
            if (!validate.isValid) {
                ctx.status = 400;
                ctx.body = validate.error;
            }
            else if (exist.length > 0) {
                ctx.status = 400;
                ctx.body = 'Mobile number is already exists';
            }
            else {
                const contact = new Contact_1.default({
                    name, email, mobile
                });
                const user = yield contact.save();
                // return CREATED status code and contact
                ctx.status = 201;
                ctx.body = user;
            }
        });
    }
    /**
     * Update contact
     * @param     {object}  ctx
     * @access    public
     * @return    {json} mixed
     */
    static update(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const { mobile } = ctx.params;
            const { name, email } = ctx.request.body;
            const contact = yield Contact_1.default.findOneAndUpdate({ mobile }, { $set: { name, email } });
            if (contact) {
                ctx.status = 200;
                ctx.body = contact;
            }
            else {
                ctx.status = 400;
                ctx.body = 'Contact doesn\'t exist in the db';
            }
        });
    }
    /**
     * Delete contact
     * @param     {object}  ctx
     * @access    public
     * @return    {json} mixed
     */
    static remove(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const { mobile } = ctx.params;
            const contact = yield Contact_1.default.findOneAndDelete({ mobile });
            if (contact) {
                ctx.status = 200;
                ctx.body = contact;
            }
            else {
                ctx.status = 400;
                ctx.body = 'Contact doesn\'t exist in the db';
            }
        });
    }
}
exports.default = ContactController;
