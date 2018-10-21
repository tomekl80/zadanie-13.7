'use sctict';

var fs = require('fs');
var colors = require('colors');

fs.readdir('./', 'utf-8', function(err, files) {
    console.log('Dane przed odczytem!'.blue);
    console.log(files);
    fs.writeFile('./lista.txt', (files.join(',\n')), function(err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
        fs.readFile('./lista.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie'.blue)
            console.log(data);
        });
    });
});