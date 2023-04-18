
import { createMember as createMemberService, getTeam as getTeamService } from "../services/teamService.js";
import {v4} from 'uuid'
import path from 'path'
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createMember = async (req,res,next) => {
    try {
        const {name, position, description, order} = req.body;
        const {image} = req.files;
        console.log(req.body)
        let imgName = v4() + ".jpg"
        console.log(imgName)
        image.mv(path.resolve(__dirname, '..', 'public/assets/img/team', imgName))
        const memberData = await createMemberService({image: imgName, name, position, description, order})

        res.json(memberData)
    } catch (error) {
        next(error)
    }
}

const getTeam = async(req,res,next) => {
    try {
        const team = await getTeamService()
        res.json(team)
    } catch (error) {
        next()
    }
}


export {
    createMember,
    getTeam
}