import PartnerModel from "../models/partnerModel.js"



const getPartners = async () => {
    const partners = await PartnerModel.find()
    return partners
}


const createPartner = async ({image}) => {
    const partner = await PartnerModel.create({
        image
    })

    return partner
}


const deletePartner = async(_id) => {
    const partner = await PartnerModel.deleteOne({_id})
    return partner
}

export {
    getPartners,
    createPartner,
    deletePartner
}