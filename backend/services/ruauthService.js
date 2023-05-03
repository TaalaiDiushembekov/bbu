import UserModel from "../models/userModel.js";
import TokenService from "./tokenService.js";

const refreshUser = async () => {
    const userData  = await UserModel.findOne({_id: id}).populate('org').exec();

    const tokens = TokenService.generateTokens({
        id: userData._id,
        role: userData.role,
        email: userData.email,
    });
}

export default refreshUser