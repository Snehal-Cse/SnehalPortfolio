import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    userName: {
        type:'String',
        required:true
    },
    password:{
        type:'String',
        required:true
    }
    
},{timeStamps:true})
const user = mongoose.model('User', userSchema)
export default user