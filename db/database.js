const mongoose = require('mongoose');

const connect = async () => {
    try{
        const response = await mongoose.connect('mongodb://localhost:27017/student-data');
        if(response){
            console.log('Database connected...!!!');
        }
    }catch(err){
        console.log('Database not connected...!!!');
    }
}

module.exports = connect;