const mongoose = require('mongoose');

function connectDB(){
<<<<<<< HEAD
    mongoose.connect(process.env.MONGODB_URL).then(()=>{
        console.log("✅ ConnectDB");
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports =connectDB
=======
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("✅ ConnectDB");
    }).catch((err)=>{
        console.log(err.message);
    })
}

module.exports = connectDB;
>>>>>>> c5ae6eb0337d74a27e1cd6909567ddab502e1d80
