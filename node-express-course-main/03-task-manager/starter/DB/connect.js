const mongoose = require('mongoose')

const password = 'Manukn@98'
const DBLink = `mongodb+srv://Manu:${password}@cluster0.fgo4onc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
const ConnectDB = (url) => {
    mongoose.connect(DBLink , {
        useNewUrlParser:true,   
        useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true })
}

module.exports = ConnectDB;
