import mongoose, { Promise } from'mongoose'

const registerschema = new mongoose.Schema({
    firstName:{

       type:String
    
    },
    lastName:{
        type:String
    },
    userName:{
        type:String
    },
    Password:{
        type:String
    },
    
    Email:{
        type:String
    },
    mobile:{
        type:String
    },
    qualification:{
        type:String
    },
    address:{
        type:String
    }
}, {
    timestamps:true

});

const model=mongoose.model('AddLogindetails',registerschema)

export default model