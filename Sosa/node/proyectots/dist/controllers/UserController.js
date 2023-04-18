"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractController_1 = __importDefault(require("./AbstractController"));
class UserController extends AbstractController_1.default {
    static getInstance() {
        //si existe la instancia la regresa
        if (this.instance) {
            return this.instance;
        }
        // Si no existe la instancia la crea
        this.instance = new UserController('user');
        return this.instance;
    }
    // Configurar las rutas de controlador
    initRoutes() {
        this.router.get("/readUsers", this.getReadUsers.bind(this));
        this.router.post("/createUser", this.postCreateUser.bind(this));
    }
    // Los métodos asociados a las rutas
    getReadUsers(req, res) {
        res.status(200).send("Servicio en línea :)😄");
    }
    postCreateUser(req, res) {
        res.status(200).send("Registro exitoso");
    }
}
exports.default = UserController;
