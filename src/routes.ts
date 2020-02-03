import Router from "koa-router";
import ContactController from './controllers/ContactController';

const routers = new Router();
const { findAll, create, findByMobile, update, remove } = new ContactController();


//CONTACT ROUTES
routers.get( '/contact/', findAll );
routers.post( '/contact/', create );
routers.get( '/contact/:mobile', findByMobile );
routers.post( '/contact/:mobile', update );
routers.delete( '/contact/:mobile', remove );

export default routers;