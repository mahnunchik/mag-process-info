
var Transform = require('readable-stream/transform');

var pid = '' + process.pid;
var hostname = require('os').hostname();
var platform = process.platform;
var arch = process.arch;
var cwd = process.cwd();


module.exports = function() {
  var stream = new Transform({objectMode: true});

  stream._transform = function(data, encoding, cb) {
    data.pid = pid;
    data.hostname = hostname;
    data.platform = platform;
    data.arch = arch;
    data.cwd = cwd;
    cb(null, data);
  };

  return stream;
};
