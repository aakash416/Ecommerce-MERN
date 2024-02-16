import Profile from "../Model/profileModel.js";
import bcryptjs from "bcryptjs";

const userRegister = async (req, res) => {
    try {
        const { firstName, lastName, email, password, phone, address, gender, role, image } = req.body;
        const existingProfile = await Profile.findOne({ email });

        if (existingProfile) {
            return res.status(409).json({ message: "Profile already exists" });
        }
        const passwordHash = await bcryptjs.hash(password, 10);
        const profile = await Profile.create({
            firstName,
            lastName,
            email,
            password: passwordHash,
            phone,
            address,
            gender,
            role,
            image
        });
        return res.status(201).json({ profile, message: "Profile created successfully" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }

}

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingProfile = await Profile.findOne({ email });
        if (!existingProfile) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        const isMatch = await bcryptjs.compare(password, existingProfile.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        return res.status(200).json({ existingProfile, message: "Login successful" });

    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

export { userRegister, userLogin };