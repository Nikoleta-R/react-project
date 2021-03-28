const mongoose = require('mongoose');
const config =  require('./index')

module.exports =(app)=>{

mongoose.connect(config.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true});

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));  
db.once('open', console.log.bind(console, 'Db Connected!')); 

}
