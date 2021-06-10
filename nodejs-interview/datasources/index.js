const fs = require('fs');
const path = require("path");
const TaxiRecord = require('../models/index')
const getTaxiRecordsFromDB = () => {
    const data = fs.readFileSync(path.resolve(__dirname, './../data/data.test.csv'),
        { encoding: 'utf8', flag: 'r' });
    const lines = data.split('\n');
    const taxiRecordArr = []
    for(line of lines){
        const arr = line.split(',');
        taxiRecordArr.push(new TaxiRecord(...arr))
    }
    return taxiRecordArr
}

module.exports = { getTaxiRecordsFromDB }