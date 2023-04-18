import TeamModel from "../models/teamModel.js";

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

const getTeam = async()=> {
    const team = await TeamModel.find();
    return team
}
export { createMember, getTeam };
