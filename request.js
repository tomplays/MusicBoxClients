'use strict';
/*
Request.js basic scripts
Post some datas to musicBox api
*/

var request_poster = require('./request_poster');

// just an example...

var args = new Object ({title:'My new document', content: 'Hello, ..'});
request_poster.create_post(args);

