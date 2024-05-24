import mongoose from "mongoose";
const experienceSchema = new mongoose.Schema({
    Heading: {
        type:'String',
        required:true
    },
    Content:{
        type:'String',
        required:true
    }
},{timeStamps:true})
const Experience = mongoose.models.Experience || mongoose.model('Experience', experienceSchema)
export default Experience