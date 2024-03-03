import Profile from "../Model/profileModel.js";

export const viewAllUsers = async (req, res) => {
    try {
        const users = await Profile.find({ role: "user" });
        return res.status(200).json({ users, message: "Users retrieved successfully" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

export const viewSingleUser = async (req, res) => {
    try {
        const user = await Profile.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json({ user, message: "User retrieved successfully" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

export const updateUser = async (req, res) => {
    try {
        const user = await Profile.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const updatedUser = await Profile.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).json({ updatedUser, message: "User updated successfully" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const user = await Profile.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        await user.remove();
        return res.status(200).json({ message: "User deleted successfully" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

export const viewAllSellers = async (req, res) => {
    try {
        const sellers = await Profile.find({ role: "seller" });
        return res.status(200).json({ sellers, message: "Sellers retrieved successfully" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}
