import TariffModel from "../models/tarrifModel.js"

const createTariff = async(name, services)=> {
    const tariff = await TariffModel.create({name,services})
    await tariff.save()
    return tariff
}

const getAllTariffs = async(name, services) => {
    const tariffs = await TariffModel.find();
    return tariffs
}

const getOneTariff = async(_id) => {
    const tariff = await TariffModel.findOne({_id});
    return await tariff
}

const deleteTariff = async(_id) => {
    return await TariffModel.deleteOne({_id})
}

const updateTariff = async(_id, name, services) => {
    const tariff = await TariffModel.updateOne({_id}, {name, services})

    return tariff
}

export { createTariff, getAllTariffs, getOneTariff, deleteTariff, updateTariff}