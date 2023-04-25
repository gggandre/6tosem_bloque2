"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    "development": {
        "username": "DB_NAME",
        "password": "DB_PASSWORD",
        "database": "DB_NAME",
        "host": "DB_HOST",
        "dialect": "mysql"
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production": {
        "username": "root",
        "password": null,
        "database": "database_production",
        "host": "127.0.0.1",
        "dialect": "mysql"
    }
};
