import Profile from '../Model/profileModel.js';

export const isSeller = async (req, res, next) => {
    try {
        const user = await Profile.findOne({ _id: req.id });
        if (!user) {
            return res.status(404).json({ message: 'Profile not found' });
        }
        if (user.role !== 'seller') {
            return res.status(403).json({ message: 'You are not authorized to perform this action' });
        }
        next();
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}