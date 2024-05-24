import mongoose from "mongoose";
const educationSchema = new mongoose.Schema({
    Completion: {
        type:'Number',
        required:true
    },
    Scored:{
        type:'Number',
        required:true
    },
    Institute:{
        type:'String',
        required:true
    },
    Location:{
        type:'String',
        required:true
    }
},{timeStamps:true})
const Education = mongoose.models.Education || mongoose.model('Education', educationSchema)
export default Education