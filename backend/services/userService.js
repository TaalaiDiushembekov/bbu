import UserModel from "../models/userModel.js";
import OrgModel from "../models/orgModel.js";
import ErrorService from "./errorService.js";
import TokenService from "./tokenService.js";
import { compare, hash } from "bcrypt";

const registration = async (email, password, role) => {
    const oldUser = await UserModel.findOne({ email });
    // console.log(oldUser);
    if (oldUser) {
        throw ErrorService.BadRequest(
            "User with this email already registered!"
        );
    }
    const hashedPassword = await hash(password, 3);


    const organization = await OrgModel.findOne({org_email: email})
    console.log(organization)
    if(!organization){
        throw ErrorService.BadRequest(
            "Write correct organization!"
        );
    }

    const user = await UserModel.create({
        email,
        password: hashedPassword,
        role,
        org: organization._id
    });


    await user.save();

    return {
        user: {
            id: user.id,
            email,
            password: user.password,
            role,
            org: user.org,
        },
    };
};

const login = async (email, password) => {
    const user = await UserModel.findOne({ email }).populate('org').exec();

    if (!user) {
        throw ErrorService.BadRequest("Wrong email or password");
    }

    console.log(user)
    if (!user?.org?.is_checked && user.role === 'user') {
        throw ErrorService.ForbiddenError("Вы не активны");
    }

    const comparedPassword = await compare(password, user.password);
    if (!comparedPassword) {
        throw ErrorService.BadRequest("Wrong email or password");
    }
    const tokens = TokenService.generateTokens({
        id: user.id,
        role: user.role,
        email,
    });
    return {
        refreshToken: tokens.refreshToken,
        user: {
            accessToken: tokens.accessToken,
            id: user.id,
            email,
            password: user.password,
            role: user.role,
            org: user.org
        },
    };
};

const refreshUser = async (_id) => {
    const user  = await UserModel.findOne({_id}).populate('org').exec();

    const tokens = TokenService.generateTokens({
        id: user._id,
        role: user.role,
        email: user.email,
    });

    return {
        refreshToken: tokens.refreshToken,
        user: {
            accessToken: tokens.accessToken,
            id: user.id,
            email: user.email,
            password: user.password,
            role: user.role,
            org: user.org
        }
    }
}

const getUsers = async () => {
    const usersData = await UserModel.find().populate('org').exec();

    return usersData;
};

const getOneUser = async (_id) => {
    const userData = await UserModel.findOne({ _id }).populate({
        path: 'org',
        populate: {
            path: 'org_document'
        }
    }).exec();;

    return userData;
};

export { registration, login, refreshUser, getUsers, getOneUser };
