var staticServer = require('static-server');
var server = new staticServer({
    rootPath:'./dist/',
    port:8080
});

server.start(function(){
    console.log('server started At Port' ,server.port);
});