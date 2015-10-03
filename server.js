var express = require('express');
var livereload = require('livereload');

var lrPort = 8091;
var mainPort = 3080;

app = express()

app.use(require('connect-livereload')({
    port:lrPort
}));

app.use(express.static('public'))
app.use('/bower', express.static('bower_components'))

lrServer = livereload.createServer({port: lrPort});
lrServer.watch('.');

var server = app.listen(mainPort, function() {});

console.log('Listening to port '  + mainPort);
