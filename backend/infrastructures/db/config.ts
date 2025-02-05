import mongoose, { mongo } from 'mongoose';

const connectMongoDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('\x1b[32m%s\x1b[0m', 'Connected to MongoDB');

    }catch(error){
        console.log('error', error)
    }
}

export default connectMongoDB;