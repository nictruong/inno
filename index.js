var express = require('express');
var sys = require('sys');
var util = require('util');
var exec = require('child_process').exec;

var child;

var app = express();

app.get('/', function(req, res) {
	res.send('HELLO WORLD!');	
});

app.put('/tv', function(req, res) {
//	child = exec('echo "on 0" | cec-client -s', function(error, stdout, stderr) {
//		console.log('stdout: ' + stdout);
//		console.log('stderr: ' + stderr);
//		if (error !== null) {
//			console.log('exec error: ' + error);
//			res.sendStatus(500);
//		}else{		
			res.sendStatus(200);
//		}
//	});
});


app.delete('/tv', function(req, res) {
//	child = exec('echo "standby 0" | cec-client -s', function(error, stdout, stderr) {
//		console.log('stdout: ' + stdout);
//		console.log('stderr: ' + stderr);
//		if (error !== null) {
//			console.log('exec error: ' + error);
//			res.sendStatus(500);
//		}else{		
			res.sendStatus(200);
//		}
//	});
});

app.put('/tv/channels/:channel', function(req, res) {
	var channel = req.params.channel;
	res.sendStatus(200);
});

app.put('/tv/channels/:channel/record', function(req, res) {
	var channel = req.params.channel;
	res.sendStatus(200);
});


app.listen(3000, function() {
	console.log('Example app listening on port 3000!');
});

/////////////////
/////////////////

var http = require("http");
var fileSystem = require("fs");
var path = require("path");
var util = require("util");

http.createServer(function(request, response) {
	var filePath = "1.mp3";
	var stat = fileSystem.statSync(filePath);

	response.writeHead(200, {
		'Content-Type': 'audio/mpeg',
		'Content-Length': stat.size	
	});

	var readStream = fileSystem.createReadStream(filePath);
	util.pump(readStream, response);
	
}).listen(2000);


