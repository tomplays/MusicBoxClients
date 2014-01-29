'use strict';
/*
Sockets.io Client basic scripts


connect and stream random data  .. yes.. basic


./ minimal
./ basic
./ standalone
*/


var app_package = require('./package.json'),
nconf = require('nconf');
nconf.argv().env().file({file:'config.json'});
var io = require('socket.io-client'),
socket = io.connect(nconf.get("SERVER_URL"), {
    port: nconf.get("PORT")
});
var send_sockets = 0;

function get_random(len){

 	var i;
    var str = "";
    var possible_b = "abc_341";
    var possible = "<->";
  	
  	len = Math.floor(Math.random()*20)+3
     for( var i=0; i < len; i++ ){

        str += possible_b.charAt(Math.floor(Math.random() * possible_b.length));
    }
	return str;

}

function say(){
	send_sockets++;
	socket.emit('news', { action: 'socket_to_docTd', fk: 'temp_'+get_random(2), fv: get_random(5),  doc_id: get_random(1) , socketer_id :1, socketer_name:'Pi#0'});
	console.log('~:~:~~:'+ send_sockets +' sockets sent and counting..')
	setTimeout(say,3000);

}
socket.on('connect', function () {
  console.log('~:~:~~: socket connected @ '+nconf.get("SERVER_URL")+':'+nconf.get("PORT"));
  say();
  
});












