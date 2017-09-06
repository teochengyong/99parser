const Papa = require('papaparse')
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
    let dataArray = []
    while(stringArray.length > 0 ) {
        while(count < UNIT_DATA_SIZE) {
            let curWord = stringArray.shift()      
            if (count === 2) {
                let levelStack = curWord.split('-')
                const level = parseInt(levelStack[0].replace(/#/g, '').trim()).toString()
                const stack = levelStack[1].trim()
                csvString.push(level, stack)
            } else if (count === 3 || count === 4) {
                csvString.push(parseFloat(curWord.split(' ')[0].replace(',', '').trim()).toString())
            } else if (count === 5) {
                let res = curWord.match(/^(S\$|)([1-9]\d{0,2}(\,\d{3})*|([1-9]\d*))(\.\d{2})?$/mi)
                csvString.push(res[2])
            } else if (count === 6) {
                curWord = curWord.split(' ')[0].slice(3)
            } else {
                csvString.push(curWord.trim())
            }
            count++
        }
        let dataObject = {}
        UNIT_COLUMN_NAMES.forEach((key, index)=>{
            dataObject[key] = csvString[index]
        })
        dataArray.push(dataObject)
        csvString = []
        count=0
    }    
   return Papa.unparse(dataArray)
}

module.exports =  process99Data