import express, { Application } from 'express'

// Routes
import router from './routes/index'
import routerProduct from './routes/productsRoutes';
import routerPack from './routes/packsRouter';

export class App {
    app: Application;

    constructor(
        private port?: number | string
    ) {
        this.app = express();
        this.settings();
        this.routes();
    }

    private settings() {
        this.app.set('port', this.port || process.env.PORT || 3001);
    }

    private routes() {
        this.app.use('/', router);
        this.app.use('/products', routerProduct);
        this.app.use('/packs', routerPack);
    }

    async listen(): Promise<void> {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }

}
