const request = require('../request/request');

exports.callAndParse = url => parser => request.getString(parser)(url);
