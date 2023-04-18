"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class AbstractController {
    get router() {
        return this._router;
    }
    get prefix() {
        return this._prefix;
    }
    constructor(prefix) {
        //Atributos
        this._router = (0, express_1.Router)();
        this._prefix = prefix;
        this.initRoutes();
    }
}
exports.default = AbstractController;
