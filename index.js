const fs = require('fs')
const path = require('path')
const process99Data = require('./src/process99')

const processFile = function(filePath) {
   const fd = fs.readFile(path.resolve(__dirname, filePath),'utf-8', function(err, data) {
    if(err) {
        console.log(err)
    } else {
        console.log('Starting to process the file..')
        writeFile(filePath, process99Data(data.toString()))
    }
   })
}

const writeFile = function(filePath, data) {
    const fd = fs.writeFile(path.resolve(__dirname, `${filePath}.processed`), data, function(err) {
     if (err) {
        console.log(err)
     } else {
        console.log('Successfully written to ' + `${filePath}.processed`)
     }
    })
 }

const filePath = 'data/305D.data'
processFile(filePath)