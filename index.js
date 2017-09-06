const path = require('path')
const process99Data = require('./src/process99')
const processFile = require('./src/processFile')

const filePath = 'data/305A.data'
processFile(path.resolve(__dirname, filePath))