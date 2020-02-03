"use strict";
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
    findAll(ctx) {
        /* Contact.find()
            .then( response => {
                ctx.body = response;
            })
            .catch( error => ctx.throw(500, error) ); */
        ctx.body = "jello";
    }
    /**
     * Get single contact by mobile number
     * @param     {object}  ctx
     * @access    public
     * @return    {json} mixed
     */
    findByMobile(ctx) {
        const { mobile } = ctx.request.body;
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
        /* const { name, mobile } = ctx.request.body;

        const contact = new Contact({
            name, mobile
        });

        contact.save()
            .then( response => {
                ctx.status = 201;
                ctx.body = response;
            })
            .catch( error => ctx.throw(500, error) ); */
        ctx.body = ctx.request.body;
    }
    /**
     * Update contact
     * @param     {object}  ctx
     * @access    public
     * @return    {json} mixed
     */
    update(ctx) {
        const { body, body: { mobile } } = ctx.request;
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
        const { mobile } = ctx.request.body;
        Contact_1.default.findOneAndDelete({ mobile })
            .then(response => {
            ctx.body = Object.assign({ message: "Deleted Successfully" }, response);
        })
            .catch(error => ctx.throw(500, error));
    }
}
exports.default = ContactController;
