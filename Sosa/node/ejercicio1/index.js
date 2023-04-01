//Importar bibliotecas
const express = require('express'); //express es una biblioteca que facilita la creación de un servidor web
const app = express(); //crea una instancia de express
const personaRoutes = require('./routes/persona'); //importar las rutas de persona
//Middleware
app.use(express.json()); //permite que el servidor pueda entender los datos que se envían en formato JSON
app.use('/persona', personaRoutes); //definir el prefijo de las rutas de persona (ejemplo: /persona/altaPersona)
app.use('/listapersona', personaRoutes); //definir el prefijo de las rutas de persona (ejemplo: /persona/altaPersona)
//Definir las rutas
app.get('/test', (request, response) => {
    console.log('Servicio de prueba');
    response.send('<h1>Servidor en línea</h1>');
}
); //definir una ruta GET
//Levantar el servidor y escuchar peticiones
app.listen(8080, () => { 
    console.log('Servidor escuchando');
});