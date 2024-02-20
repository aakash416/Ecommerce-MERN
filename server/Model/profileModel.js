import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        default: "Other",
    },
    role: {
        type: String,
        enum: ["user", "seller"],
        default: "user",
    },
    image: {
        type: String,
    },
    cart: {
        type: Array,
        default: []
    }
}, { timestamps: true });

const Profile = mongoose.model("Profile", profileSchema);
export default Profile;