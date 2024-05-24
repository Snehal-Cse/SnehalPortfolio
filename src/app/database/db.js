import mongoose from 'mongoose';
export default async function ConnectToDb(){
    try{
       await mongoose.connect('mongodb+srv://snehalbandi5:MEBXVNN3Oc1ajWng@cluster0.phsh067.mongodb.net/')
       console.log("the database is connected ")
    }
    catch(error){
        console.log(`The error is spotted ${error}`)
    }
}

