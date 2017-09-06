const fs = require('fs')
const path = require('path')

const writeFile = function(filePath, data) {
    const fd = fs.writeFile(`${filePath}.processed`, data, function(err) {
     if (err) {
        console.log(err)
     } else {
        console.log('Successfully written to ' + `${filePath}.processed`)
     }
    })
 }

 module.exports = writeFile