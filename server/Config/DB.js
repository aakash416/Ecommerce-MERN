import mongoose from "mongoose";

const mongodbConnection = async (url) => {
    return await mongoose.connect(url);
}

export default mongodbConnection;
