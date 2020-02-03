import { Context } from "koa";
import Contact from '../models/Contact';

class ContactController {

    /**
     * Get all contacts
     * @param     {object}  ctx
     * @access    public
     * @return    {json} mixed
     */
    findAll( ctx: Context ) {
        Contact.find()
            .then( response => {
                ctx.body = response;
            })
            .catch( error => ctx.throw(500, error) );
    }

    /**
     * Get single contact by mobile number
     * @param     {object}  ctx
     * @access    public
     * @return    {json} mixed
     */
    findByMobile( ctx: Context ) {
        const { mobile } = ctx.request.body;
        Contact.find( {mobile} )
            .then( response => {
                if ( !response ) {
                    ctx.throw(404, "Data not found");
                } else {
                    ctx.body = response;
                }
            })
            .catch( error => ctx.throw(500, error) );
    }

    /**
     * Create contact
     * @param     {object}  ctx
     * @access    public
     * @return    {json} mixed
     */
    create( ctx: Context ) {
        const { name, mobile } = ctx.request.body;

        const contact = new Contact({
            name, mobile
        });

        contact.save()
            .then( response => {
                ctx.status = 201;
                ctx.body = response;
            })
            .catch( error => ctx.throw(500, error) );
    }

    /**
     * Update contact
     * @param     {object}  ctx
     * @access    public
     * @return    {json} mixed
     */
    update( ctx: Context ) {
        const { body, body: { mobile } } = ctx.request;
        Contact.findOneAndUpdate( {mobile}, { $set: body }, {new: true} )
            .then(response => {
                ctx.body = response;
            })
            .catch( error => ctx.throw(500, error) );
    }

    /**
     * Delete contact
     * @param     {object}  ctx
     * @access    public
     * @return    {json} mixed
     */
    remove(ctx: Context) {
        const { mobile } = ctx.request.body;
        Contact.findOneAndDelete( { mobile } )
            .then(response => {
                ctx.body = {
                    message: "Deleted Successfully",
                    ...response
                };
            })
            .catch( error => ctx.throw(500, error) );
    }
}

export default ContactController;