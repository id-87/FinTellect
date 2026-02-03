const mongoose=require('mongoose')
const model=new mongoose.Schema({
    _id:{},
    name:{},
    username:{},
    hashedPassword:{},
    role:{},
    createdAt:{}
})