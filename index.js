/*Se cre una variable constante con nombre "http" que cuarda una libreria para node js y su conexión con el front*/

const http = require("http");

/* Una función es un pedazo de codigo que nos permite realizar alguna funcionalidad 
    dependiendo del requerimiento del desarrollo de la aplicación, en este caso se crea 
    una function para controlar las peticiones que llegan a esta maquina*/

function requestController(){
     console.log("Hello World");
}

const server = http.createServer(requestController);    

server.listen(4500);