const fs = require('fs')
const path = require('path')

const readFile = function(filePath) {
   const fd = fs.readFile(path.resolve(__dirname,'data/305D.data'),'utf-8', function(err, data) {
    if(err) {
        console.log(err)
    } else {
        process99Data(data.toString())
    }
   })
}

const process99Data = function (string) {
    // 7 columns

    //date
    //block
    //level - stack
    //area sqft
    //area sqm
    //price
    //price psf
    const UNIT_COLUMN_NAMES = [
        'date', 'block', 'level',
        'stack', 'area_sqft', 'area_sqm',
        'price', 'price_psf'
    ]
    const UNIT_DATA_SIZE = 7
    let count = 0
    let stringArray = string.split('\n')
    let csvString = []
    while(count < UNIT_DATA_SIZE) {
        let curWord = stringArray[count]        
        if (count === 2) {
            let levelStack = curWord.split('-')
            const level = parseInt(levelStack[0].replace(/#/g, '').trim()).toString()
            const stack = levelStack[1].trim()
            csvString.push(level, stack)
        } else if (count === 3 || count === 4) {
            csvString.push(parseFloat(curWord.split(' ')[0].replace(',', '').trim()).toString())
        } else {
            // console.log(curWord)
            csvString.push(curWord.trim())
        }
        // console.log(csvString.join(','))
        count++
    }
    console.log(csvString)
}

readFile()