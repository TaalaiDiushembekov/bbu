import { hash } from "bcrypt";
import UserModel from "./models/userModel.js";
import ErrorService from "./services/errorService.js";
import { config } from "dotenv";
config();


const createSuperAdmin = async (email, password, role) => {
    const oldUser = await UserModel.findOne({ email });
        if (!oldUser) {
            const hashedPassword = await hash(password, 3);
        
            const user = await UserModel.create({
                email,
                password: hashedPassword,
                role,
            });
            await user.save();
        }

}

const createModerator = async (email, password, role) => {
    const oldUser = await UserModel.findOne({ email });
        if (!oldUser) {
            const hashedPassword = await hash(password, 3);
        
            const user = await UserModel.create({
                email,
                password: hashedPassword,
                role,
            });
            await user.save();
        }

}

export {
    createSuperAdmin,
    createModerator
}

