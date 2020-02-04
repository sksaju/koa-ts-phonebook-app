import Router from "koa-router";
import contactCtrl from './controllers/ContactController';

export default () => {
    const router = new Router();

    /* contact apis */
    const contactUrl = '/api/contacts/';
    router.get( contactUrl, contactCtrl.findAll );
    router.post( contactUrl, contactCtrl.create );
    router.get( `${contactUrl}:mobile`, contactCtrl.findByMobile );
    router.put( `${contactUrl}:mobile`, contactCtrl.update );
    router.delete( `${contactUrl}:mobile`, contactCtrl.remove );

    return router.routes();
}