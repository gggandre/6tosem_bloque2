const router = require('express').Router(); //importar el router de express
const personaController = require('../controllers/persona'); //importar el controlador de persona

router.get('/altaPersona',personaController.getAltaPersona); //definir una ruta GET

module.exports = router; //exportar el router