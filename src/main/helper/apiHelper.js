
exports.hello = (msg) => msg + " world";

exports.makeSha = (apiKey, secret) => ( sha256(apiKey + secret + Math.floor((new Date().getTime()) / 1000)));