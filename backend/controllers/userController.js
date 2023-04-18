import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import { registration as registrationService, login as loginService, getUsers as getUsersService} from "../services/userService.js";
import TokenService from "../services/tokenService.js";


const registration = asyncHandler(async (req, res, next) => {
    try {
        const { email, password, role } = req.body;
        const userData = await registrationService(email, password, role)

        res.json(userData)
    } catch (error) {
        next(error)
    }
});

const login = asyncHandler(async (req,res,next) => {
    try {
        const {email, password} = req.body;

        const userData = await loginService(email, password)

        return res.json(userData)
    } catch (error) {
        next(error)
    }
})



const getUsers = asyncHandler(async (req, res, next) => {
    try {
        const users = await getUsersService()
        res.json(users);
    } catch (error) {
        next(error)
    }

});
const getUsersById = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
        User.aggregate([
            {
                $lookup: {
                    from: "products",
                    localField: "organization",
                    foreignField: "organization",
                    as: "department_manager",
                },
            },
            { $match: { organization: "1" } },
        ]);
        res.json(user);
    } else {
        res.status(404);
    }
});

const updateUser = asyncHandler(async (req, res) => {
    const { cart } = req.body;
    let user = await User.updateOne(req.user._id, { cart }, { new: true });
    if (user) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: TokenService.generateTokens(user._id),
        });
    } else {
        res.status(400);
        throw new Error("Invalid user data)");
    }
});

export {
    registration,
    login,
    getUsers,
    getUsersById,
    updateUser,
};
