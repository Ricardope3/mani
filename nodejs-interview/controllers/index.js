const { getTaxiRecordsFromDB } = require('../datasources/index')

const getTaxiRecords = async (req, res) => {
    const data = getTaxiRecordsFromDB();
    res.send(data);
};

const helloWorld = async (req, res) => {
    res.send('Hello world');
};

module.exports = {
    getTaxiRecords,
};