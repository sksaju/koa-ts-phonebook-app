import { Context } from 'koa';
import Contact from '../models/Contact';
import validator from '../validators/contactValidator';

class ContactController {

    /**
     * Get all contacts
     * @param     {object}  ctx
     * @access    public
     * @return    {json} mixed
     */
    public static async findAll(ctx: Context) {
        const contacts = await Contact.find();
        ctx.status = 200;
        ctx.body = contacts;
    }

    /**
     * Get single contact by mobile number
     * @param     {object}  ctx
     * @access    public
     * @return    {json} mixed
     */
    public static async findByMobile(ctx: Context) {
        const { mobile } = ctx.params;
        const contact = await Contact.find({ mobile });
        if (contact) {
            ctx.status = 200;
            ctx.body = contact;
        } else {
            ctx.status = 404;
            ctx.body = 'Data not found';
        }
    }

    /**
     * Create contact
     * @param     {object}  ctx
     * @access    public
     * @return    {json} mixed
     */
    public static async create(ctx: Context) {
        const { body, body: { name, email, mobile } } = ctx.request;
        const validate: any = validator(body);
        const exist: any = await Contact.find({ mobile });
        
        if (!validate.isValid) {
            ctx.status = 400;
            ctx.body = validate.error;
        } else if (exist.length > 0) {
            ctx.status = 400;
            ctx.body = 'Mobile number is already exists';
        } else {
            const contact = new Contact({
                name, email, mobile
            });
            const user = await contact.save();
            // return CREATED status code and contact
            ctx.status = 201;
            ctx.body = user;
        }
    }

    /**
     * Update contact
     * @param     {object}  ctx
     * @access    public
     * @return    {json} mixed
     */
    public static async update(ctx: Context) {
        const { mobile } = ctx.params;
        const { name, email } = ctx.request.body;
        const contact = await Contact.findOneAndUpdate({ mobile }, { $set: { name, email } });
        if (contact) {
            ctx.status = 200;
            ctx.body = contact;
        } else {
            ctx.status = 400;
            ctx.body = 'Contact doesn\'t exist in the db';
        }
    }

    /**
     * Delete contact
     * @param     {object}  ctx
     * @access    public
     * @return    {json} mixed
     */
    public static async remove(ctx: Context) {
        const { mobile } = ctx.params;
        const contact = await Contact.findOneAndDelete({ mobile });
        if (contact) {
            ctx.status = 200;
            ctx.body = contact;
        } else {
            ctx.status = 400;
            ctx.body = 'Contact doesn\'t exist in the db';
        }
    }
}

export default ContactController;
