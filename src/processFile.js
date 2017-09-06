const fs = require('fs')
const path = require('path')
const writeFile = require('./writeFile')
const process99Data = require('./process99')

const processFile = function(filePath) {
    const fd = fs.readFile(filePath,'utf-8', function(err, data) {
     if(err) {
         console.log(err)
     } else {
         console.log('Starting to process the file..')
         writeFile(filePath, process99Data(data.toString()))
     }
    })
 }

 module.exports = processFile