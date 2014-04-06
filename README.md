# mag-process-info [![Build Status](https://travis-ci.org/mahnunchik/mag-process-info.svg)](https://travis-ci.org/mahnunchik/mag-process-info)

[Mag](https://github.com/mahnunchik/mag) is the streaming logger for NodeJS

`mag-process-info` is transform stream that adds the following information about process:

* pid - the PID of the process
* hostname - the hostname of the operating system
* platform - the operating system platform
* arch - the operating system CPU architecture
* cwd - the current working directory of the process

## Installation

It makes sense to use `mag-process-info` with `mag-hub` and for example `mag-format-message` and mag-colored-output. 

```
$ npm install mag-process-info mag-colored-output mag-format-message mag-hub --save
```

## Usage

```
var hub = require('mag-hub');
var info = require('mag-process-info');
var format = require('mag-format-message');
var colored = require('mag-colored-output');

hub.pipe(info())
  .pipe(format())
  .pipe(colored())
  .pipe(process.stdout);
```


## License

MIT
