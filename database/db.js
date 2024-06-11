import mongoose from "mongoose";


const dbConnection=async()=>{
    const DB_URL="mongodb+srv://joy:joy@jobxx.jm2v8hd.mongodb.net/"
    try{
        await mongoose.connect(DB_URL, {useUnifiedTopology:true});
        console.log("Database connected successfully");
    }
    catch(error){
        console.log('Error while connecting with the database', error.message);
    }
}
export default dbConnection;