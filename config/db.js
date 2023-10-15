import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        // console.log(process.env.MONGO_DB_URL)
        const conn = await mongoose.connect(process.env.MONGO_DB_URL);
        console.log(`MongoDB is connected successfully on port ${conn.connection.host}`)
    }
    catch (err) {
        console.log(`Error connecting Mongo DB : ${err}`)
        process.exit(1)
    }
}

export default connectDB;