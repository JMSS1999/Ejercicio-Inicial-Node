//Importaciones rpias de Node.
const fs = require('fs');
const variable=0;
const logueo = 0 ;
//Desarrollo de la funcion asincrona
/*fs.writeFile('./texto.txt','linea Uno',function (err) {
    if(err){
        console.log(err);
    }
    console.log("Archivo Creado con Exito");
});*/
//Funcion para leer desde un archivo
/*fs.readFile('./texto.txt',function (err, data) {
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});
*/
//console.log("Ultima linea de codigo");

//Constante para coectarse con el servidorHTTP.
/*const http = require('http');
//Instanciando a la variable de colores.
const colores = require('colors');
const servidorConectado= function (req, res){
    res.writeHead(404, {'content-type' : 'text/html' }); //Encabezado javasript de la pagina
    res.write('<h1>Programacion en Nodejs<h1>');
    res.end();
}
//Funcion de solicitud del servidor.
const server= http.createServer(servidorConectado);
    
server.listen(3000, function(){
    console.log('Servidor Conectado en el puerto 3000'.yellow);
});*/
//TRABAJANDO CON EL FRAMEWORK DE EXPRESS.
const express = require('express');
const colores = require('colors');
const server = express();
//Configurando la ruta adecuada.
server.get('/', function(req, res){
    res.send('<h1>Hola Mundo con Node y Express<h1>');
    res.end();
});
server.listen(3000, function() {
    console.log('Servidor conectado en el uerto 3000'.red);
});