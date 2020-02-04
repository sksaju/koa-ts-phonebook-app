import Router from "koa-router";
import ContactController from './controllers/ContactController';

const routers = new Router();
const { findAll, create, findByMobile, update, remove } = new ContactController();


//CONTACT ROUTES
routers.get( '/api/contacts/', findAll );
routers.get( '/api/contacts/:mobile', findByMobile );
routers.post( '/api/contacts/', create );
routers.put( '/api/contacts/:mobile', update );
routers.delete( '/api/contacts/:mobile', remove );

export default routers;