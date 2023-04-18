"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class Server {
    //Metodos
    constructor(appInit) {
        this.app = (0, express_1.default)();
        this.port = appInit.port;
        this.env = appInit.env;
        this.loadMiddlewares(appInit.middlewares);
        this.loadControllers(appInit.controllers);
    }
    loadMiddlewares(middlewares) {
        middlewares.forEach((middleware) => {
            this.app.use(middleware);
        });
    }
    loadControllers(controllers) {
        controllers.forEach((controller) => {
            this.app.use(`/${controller.prefix}`, controller.router);
        });
    }
    init() {
        this.app.listen(this.port, () => {
            console.log(`Server:Running 🚀👻 @'http://localhost:${this.port}'`);
        });
    }
}
exports.default = Server;
