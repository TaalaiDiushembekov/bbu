import TeamModel from "../models/teamModel.js";
import ErrorService from "./errorService.js";

const createMember = async ({ image, name, position, description, order }) => {
    const member = await TeamModel.create({
        image,
        name,
        position,
        description,
        order
    });
    await member.save();

    return { member: {id: member.id, image, name, position, description, order } };
};

const updateMember = async (_id, image, name, position, description, order) => {
    const member = TeamModel.updateOne({_id}, {image, name, position, description, order})

    return member
}

const getTeam = async()=> {
    const team = await TeamModel.find();
    return team
}

const getOneMember = async(_id)=> {
    const member = await TeamModel.findOne({_id})
    if(!member)
        throw ErrorService.BadRequest('No member')
    return member
}

const deleteMember = async (_id) => {
    return await TeamModel.deleteOne({_id})
}


export { createMember, getTeam, getOneMember, deleteMember, updateMember };
