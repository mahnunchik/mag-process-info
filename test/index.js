
/*global describe, it */

var info = require('../');
var expect = require('chai').expect;

var pid = '' + process.pid;
var hostname = require('os').hostname();
var platform = process.platform;
var arch = process.arch;
var cwd = process.cwd();

describe('mag-process-info', function () {
  it('should add PID information', function (done) {
    var stream = info();
    stream.on('readable', function(){
      var data = stream.read();
      expect(data).to.have.property('pid')
        .that.is.a('string')
        .and.equal(pid);
        done();
    });
    stream.write({});
  });

  it('should add hostname information', function (done) {
    var stream = info();
    stream.on('readable', function(){
      var data = stream.read();
      expect(data).to.have.property('hostname')
        .that.is.a('string')
        .and.equal(hostname);
        done();
    });
    stream.write({});
  });

  it('should add platform information', function (done) {
    var stream = info();
    stream.on('readable', function(){
      var data = stream.read();
      expect(data).to.have.property('platform')
        .that.is.a('string')
        .and.equal(platform);
        done();
    });
    stream.write({});
  });

  it('should add architecture information', function (done) {
    var stream = info();
    stream.on('readable', function(){
      var data = stream.read();
      expect(data).to.have.property('arch')
        .that.is.a('string')
        .and.equal(arch);
        done();
    });
    stream.write({});
  });

  it('should add CWD information', function (done) {
    var stream = info();
    stream.on('readable', function(){
      var data = stream.read();
      expect(data).to.have.property('cwd')
        .that.is.a('string')
        .and.equal(cwd);
        done();
    });
    stream.write({});
  });
});
