import express, { Request, Response } from 'express';
import AbstractController from '../controllers/AbstractController';

class Server {
    //Atributos
    private app: express.Application;;
    private port: number;
    private env: string;

    //Métodos
    constructor(appInit: { port: number, env: string; middlewares: any[], controllers: AbstractController[] }) {
        this.app = express();
        this.port = appInit.port;
        this.env = appInit.env;
        this.loadMiddlewares(appInit.middlewares);
    }
    
    private loadMiddlewares(middlewares: any[]): void {
        middlewares.forEach((middleware: any) => {
            this.app.use(middleware);
        })
    }

    private loadControllers(controllers: AbstractController[]): void {
        controllers.forEach((controller: AbstractController) => {
            this.app.use(`/${controller.prefix}`, controller.router);
        })
    }

    private init(): void {
        this.app.listen(this.port, () => {
            console.log(`Server listening on port ${this.port} in ${this.env} mode`);
        })
    }

}