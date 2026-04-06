const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://zaid03297_db_user:SlLJUbfywUW6Mzzv@cluster0.g7i2hs1.mongodb.net/?appName=Cluster0').then(()=>{
    console.log("Connected to MongoDB successfully")
}).catch((err)=>{
    console.log("Error connecting to MongoDB: ", err)
})



















// 
// zaid03297_db_user


// mongodb+srv://zaid03297_db_user:<db_password>@cluster0.g7i2hs1.mongodb.net/?appName=Cluster0