const fs = require('fs')

const writeFile = function (filePath, data) {
  const fd = fs.writeFile(`${filePath}.csv`, data, function (err) {
    if (err) {
      console.log(err)
    } else {
      console.log('Successfully written to ' + `${filePath}.csv`)
    }
  })
}

module.exports = writeFile
