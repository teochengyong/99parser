const fs = require('fs')

const concatFile = function (filePath, data) {
  const fd = fs.appendFile(`${filePath}.csv`, data, function (err) {
    if (err) {
      console.log(err)
    } else {
      console.log('Successfully append to ' + `${filePath}.csv`)
    }
  })
}

module.exports = concatFile
