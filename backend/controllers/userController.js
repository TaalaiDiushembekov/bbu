import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import {
    registration as registrationService,
    login as loginService,
    getUsers as getUsersService,
    getOneUser as getOneUserService
} from "../services/userService.js";
import TokenService from "../services/tokenService.js";

const registration = async (req, res, next) => {
    try {
        const { email, password, role } = req.body;
        const userData = await registrationService(email, password, role);

        res.json(userData);
    } catch (error) {
        next(error);
    }
};

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const userData = await loginService(email, password);

        return res.json(userData);
    } catch (error) {
        next(error);
    }
};

const getUsers = async (req, res, next) => {
    try {
        const usersData = await getUsersService();
        res.json(usersData);
    } catch (error) {
        next(error);
    }
};

const getOneUser = async(req,res,next) => {
    try {
        const {id} = req.params;

        const userData =  await getOneUserService(id)

        res.json(userData)

    } catch (error) {
        next(error)
    }
}

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

export { registration, login, getUsers, getOneUser, updateUser };
