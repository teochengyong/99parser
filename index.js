const path = require('path')
const processFile = require('./src/processFile')

const filePath = 'data/305A.data'
processFile(path.resolve(__dirname, filePath))
