import UserModel from "../models/userModel.js";
import ErrorService from "./errorService.js";
import TokenService from "./tokenService.js";
import { compare, hash } from "bcrypt";

const registration = async (email, password, role) => {
    const oldUser = await UserModel.findOne({ email });
    console.log(oldUser);
    if (oldUser) {
        throw ErrorService.BadRequest(
            "User with this email already registered!"
        );
    }
    const hashedPassword = await hash(password, 3);

    const user = await UserModel.create({
        email,
        password: hashedPassword,
        role,
    });
    await user.save();

    return {
        user: {
            id: user.id,
            email,
            password,
            role,
        },
    };
};

const login = async (email, password) => {
    const user = await UserModel.findOne({ email });

    if (!user) {
        throw ErrorService.BadRequest("Wrong email or password");
    }

    const comparedPassword = await compare(password, user.password);
    if (!comparedPassword) {
        throw ErrorService.BadRequest("Wrong email or password");
    }
    const tokens = TokenService.generateTokens({
        id: user.id,
        role: user.role,
        email,
        password,
    });
    return {
        refreshToken: tokens.refreshToken,
        user: {
            accessToken: tokens.accessToken,
            id: user.id,
            email,
            password,
            role: user.role,
        },
    };
};

const getUsers = async () => {
    const usersData = await UserModel.find();

    return usersData;
};

const getOneUser = async (_id) => {
    const userData = await UserModel.findOne({ _id });

    return userData;
};

export { registration, login, getUsers, getOneUser };
