import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import {
    registration as registrationService,
    login as loginService,
    getUsers as getUsersService,
    getOneUser as getOneUserService,
    refreshUser as refreshUserService,
    updateUser as updateUserService,
} from "../services/userService.js";
import TokenService from "../services/tokenService.js";
import UserModel from "../models/userModel.js";

const registration = async (req, res, next) => {
    try {
        const { email, password, role, org } = req.body;
        const userData = await registrationService(email, password, role, org);

        res.json(userData);
    } catch (error) {
        next(error);
    }
};

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const userData = await loginService(email, password);

        res.cookie("refreshToken", userData.refreshToken, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 72,
        });

        return res.json(userData.user);
    } catch (error) {
        next(error);
    }
};

const refreshUser = async (req, res, next) => {
    try {
        const { id } = req.user;

        const data = await refreshUserService(id);

        res.cookie("refreshToken", data.refreshToken, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 72,
        });
        res.json(data.user);
    } catch (error) {
        console.log(error);
    }
};
const logout = async (req, res, next) => {
    try {
        res.cookie("refreshToken", "", {
            maxAge: 0,
            httpOnly: true,
        });
        res.send("Logout Succeed");
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

const getOneUser = async (req, res, next) => {
    try {
        const { id } = req.params;

        const userData = await getOneUserService(id);

        res.json(userData);
    } catch (error) {
        next(error);
    }
};

const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;

        const {password} = req.body;
        
        const userData = await updateUserService(id, password)

        res.json(userData)
    } catch (error) {
        next(error)
    }
};

export {
    registration,
    login,
    refreshUser,
    logout,
    getUsers,
    getOneUser,
    updateUser,
};
