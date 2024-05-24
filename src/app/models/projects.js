import mongoose from "mongoose";
const projectSchema = new mongoose.Schema({
    Heading: {
        type:'String',
        required:true
    },
    Content:{
        type:'String',
        required:true
    },
    Content:{
        type:'String',
        required:true
    },
    Content:{
        type:'String',
        required:true
    }
},{timeStamps:true})
const Project = mongoose.models.Project || mongoose.model('Project', projectSchema)
export default Project