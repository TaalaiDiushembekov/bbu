import {
    createTariff as createTariffService,
    getAllTariffs as getAllTariffsService,
    getOneTariff as getOneTariffService,
    deleteTariff as deleteTariffService,
    updateTariff as updateTariffService
} from "../services/tariffService.js";
const createTariff = async (req, res, next) => {
    try {
        const { name, services } = req.body;

        const tariffData = await createTariffService(name, services);

        res.json(tariffData);
    } catch (error) {
        next(error);
    }
};

const getAllTariffs = async (req, res, next) => {
    try {
        const tariffData = await getAllTariffsService();
        res.json(tariffData);
    } catch (error) {
        next(error);
    }
};

const getOneTariff = async (req, res, next) => {
    try {
        const { id } = req.params;

        const tariffData = await getOneTariffService(id);

        res.json(tariffData)
    } catch (error) {
        next(error);
    }
};

const deleteTariff = async (req,res, next) => {
    try {
        const {id} = req.params;

        await deleteTariffService(id)

        return res.json({message: `tariff deleted`})
    } catch (error) {
        next(error)
    }
}

const updateTariff = async (req,res, next) => {
    try {
        const {id} = req.params;
        const {name, services} = req.body
        console.log(id, name, services)
        const tariff = await updateTariffService(id, name, services)

        res.json(tariff)

    } catch (error) {
        next(error)
    }
}

export { createTariff, getAllTariffs, getOneTariff, deleteTariff, updateTariff };
