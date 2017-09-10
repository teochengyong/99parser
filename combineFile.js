const fs = require('fs')
const path = require('path')
const writeFile = require('./src/writeFile')
const concatFile = require('./src/concatFile')

if (process.argv.length <= 2) {
  console.log('Usage: ' + __filename + ' path/to/directory')
  process.exit(-1)
}

const folderPath = process.argv[2]
const outputFileName = process.argv[3]
const csvFilePattern = process.argv[4] || '.csv'

const concatFiles = function (folderPath, outputFileName, csvFilePattern) {
  try {
    fs.readdir(folderPath, function (err, items) {
      console.log(items)
      if (err) {
        throw err
      }
      items.filter(name => name.indexOf(csvFilePattern) > -1).forEach(function (item, index) {
        console.log('folderPath' + folderPath)
        if (item.indexOf(csvFilePattern) && index === 0) {
          const fd = fs.readFile(path.resolve(__dirname, folderPath, item), 'utf-8', function (err, data) {
            if (err) {
              console.log(err)
            } else {
              console.log(index)
              console.log('Starting to combine the file to ' + outputFileName)
              writeFile(path.resolve(__dirname, folderPath, outputFileName), data)
            }
          })
        } else {
          const fd = fs.readFile(path.resolve(__dirname, folderPath, item), 'utf-8', function (err, data) {
            if (err) {
              console.log(err)
            } else {
              console.log('Starting to concat the file ' + item)
              console.log(index)
              concatFile(path.resolve(__dirname, folderPath, outputFileName), data)
            }
          })
        }
      })
    })
  } catch (err) {
    console.log(err)
  }
}
concatFiles(folderPath, outputFileName, csvFilePattern)
