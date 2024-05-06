import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async () => {
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-15ovzwv-shard-00-00.nznsbgg.mongodb.net:27017,ac-15ovzwv-shard-00-01.nznsbgg.mongodb.net:27017,ac-15ovzwv-shard-00-02.nznsbgg.mongodb.net:27017/?ssl=true&replicaSet=atlas-zjaboz-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL);
        console.log("Database connected Successfully");
    } catch (error) {
        console.log("Error while connecting to the datbase ", error.message);
    }   
}

export default Connection;