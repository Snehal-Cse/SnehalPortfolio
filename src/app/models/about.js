import mongoose from "mongoose";
const aboutSchema = new mongoose.Schema({
    AboutMe: {
        type:'String',
        required:true
    },
    Projects:{
        type:'Number',
        required:true
    },
    Experience:{
        type:'Number',
        required:true
    },
    Skills:{
        type:'String',
        required:true
    },
    Extracurricular:{
        type:'String',
        required:true
    }
},{timeStamps:true})
const About = mongoose.models.About ||  mongoose.model('About', aboutSchema)
export default About