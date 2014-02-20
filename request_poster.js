var app_package = require('./package.json'),
nconf = require('nconf');
nconf.argv().env().file({file:'config.json'});
var request = require('request');
var endpoint = nconf.get("API_SERVER_URL")+':'+nconf.get("API_SERVER_PORT");

exports.create_post  = function (args) {
	var r = request.post(endpoint+'/apis/doc_create')
	var form = r.form()
	form.append('title',			args.title);
	form.append('content',			args.content);
	//form.append('slug', '');
	//form.append('status', 'Hello, ... ');
	//form.append('kind', 'Hello, ... ');
	//form.append('order', 'Hello, ... ');
	//form.append('RoomId', '1');
	//form.append('my_buffer', new Buffer([1, 2, 3]))
	//form.append('my_file', fs.createReadStream(path.join(__dirname, 'doodle.png'))
	//form.append('remote_file', request('http://google.com/doodle.png'))
	return;
}