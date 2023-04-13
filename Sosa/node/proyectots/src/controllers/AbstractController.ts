import { Router } from 'express';

export default abstract class AbstractController {
    private _router: Router = Router();
    private _prefix: string;

    public get router(): Router {
        return this._router;
    }

    public get prefix(): string {
        return this._prefix;
    }

    protected constructor(prefix: string) {
        this._prefix = prefix;

    }

    //Inicializar rutas
    protected abstract initializeRoutes(): void;
}