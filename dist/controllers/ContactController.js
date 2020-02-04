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
class ContactController {
    /**
     * Get all contacts
     * @param     {object}  ctx
     * @access    public
     * @return    {json} mixed
     */
    static findAll(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            // load all users
            const contacts = yield Contact_1.default.find();
            // return OK status code and loaded users array
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
    findByMobile(ctx) {
        const { mobile } = ctx.params.body;
        Contact_1.default.find({ mobile })
            .then(response => {
            if (!response) {
                ctx.throw(404, "Data not found");
            }
            else {
                ctx.body = response;
            }
        })
            .catch(error => ctx.throw(500, error));
    }
    /**
     * Create contact
     * @param     {object}  ctx
     * @access    public
     * @return    {json} mixed
     */
    create(ctx) {
        const { name, mobile } = ctx.request.body;
        const contact = new Contact_1.default({
            name, mobile
        });
        contact.save()
            .then(response => {
            ctx.status = 201;
            ctx.body = response;
        })
            .catch(error => ctx.throw(500, error));
        ctx.body = ctx.request.body;
    }
    /**
     * Update contact
     * @param     {object}  ctx
     * @access    public
     * @return    {json} mixed
     */
    update(ctx) {
        const { mobile } = ctx.params;
        const { body } = ctx.request;
        Contact_1.default.findOneAndUpdate({ mobile }, { $set: body }, { new: true })
            .then(response => {
            ctx.body = response;
        })
            .catch(error => ctx.throw(500, error));
    }
    /**
     * Delete contact
     * @param     {object}  ctx
     * @access    public
     * @return    {json} mixed
     */
    remove(ctx) {
        const { mobile } = ctx.params.body;
        Contact_1.default.findOneAndDelete({ mobile })
            .then(response => {
            ctx.body = Object.assign({ message: "Deleted Successfully" }, response);
        })
            .catch(error => ctx.throw(500, error));
    }
}
exports.default = ContactController;
