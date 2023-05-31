import {
    createMember as createMemberService,
    getTeam as getTeamService,
    updateMember as updateMemberSerive,
    getOneMember as getOneMemberSerive,
    deleteMember as deleteMemberSerive

} from "../services/teamService.js";
import { v4 } from "uuid";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createMember = async (req, res, next) => {
    try {
        console.log(req.body)
        const { name, position, description, order } = req.body;
        const { image } = req.files;
        let imgName = v4() + ".jpg";
        image.mv(
            path.resolve(__dirname, "..", "public/assets/img/team", imgName)
        );
        const memberData = await createMemberService({
            image: imgName,
            name,
            position,
            description,
            order,
        });

        res.json(memberData);
    } catch (error) {
        next(error);
    }
};

const updateMember = async(req,res,next) => {
    try {
        const {id} = req.params;
        const { name, position, description, order } = req.body;
        let image;
        image = req.files?.image ?? 'asd';

        let imgName = v4() + ".jpg";
        image.mv(
            path.resolve(__dirname, "..", "public/assets/img/team", imgName)
        );
        // console.log(`=====${imgName}=====`)
        // console.log(req.body)
        const memberData = await updateMemberSerive({
            _id: id,
            image: imgName,
            name,
            position,
            description,
            order,
        });
        res.json(memberData)

    } catch (error) {
        next(error)
    }
}

const getTeam = async (req, res, next) => {
    try {
        const team = await getTeamService();
        res.json(team);
    } catch (error) {
        next();
    }
};



const getOneMember = async (req, res, next) => {
    try {
        const {id} = req.params
        const member = await getOneMemberSerive(id)
        res.json(member)
    } catch (error) {
        next(error)
    }
};
const deleteMember = async (req, res, next) => {
    try {
        const {id} = req.params
        const member = await deleteMemberSerive(id)
        res.json({msg: 'member deleted'})
    } catch (error) {
        next(error)
    }
};

export { createMember, getTeam, getOneMember, deleteMember, updateMember };
