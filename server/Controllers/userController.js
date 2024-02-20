import Profile from "../Model/profileModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

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
        const token = jwt.sign({ _id: existingProfile._id }, process.env.JWT_SECRET, { expiresIn: "1h" });



        const accessToken = jwt.sign({ email: email },
            "jwt-access-token-secret-key", { expiresIn: '1m' })
        const refreshToken = jwt.sign({ email: email },
            "jwt-refresh-token-secret-key", { expiresIn: '5m' })

        res.cookie('accessToken', accessToken, { maxAge: 60000 })

        res.cookie('refreshToken', refreshToken,
            { maxAge: 300000, httpOnly: true, secure: true, sameSite: 'strict' })



        return res.status(200).json({ token, existingProfile, message: "Login successful" });

    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

const updateProfile = async (req, res) => {

    try {
        const { firstName, lastName, email, password, phone, address, gender, role, image } = req.body;

        const existingProfile = await Profile.findOne({ _id: req.id });
        if (!existingProfile) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        const isMatch = await bcryptjs.compare(password, existingProfile.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        const token = jwt.sign({ _id: existingProfile._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        const passwordHash = await bcryptjs.hash(password, 10);

        const updated = await Profile.findByIdAndUpdate(req.id, {
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
        return res.status(200).json({ token, updated, message: "Profile updated successfully" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }

}




export { userRegister, userLogin, updateProfile };