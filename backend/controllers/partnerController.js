import { createPartner as createPartnerService,
    getPartners as getPartnersService,
    deletePartner as deletePartnerService
} from '../services/partnerService.js'


import { v4 } from "uuid";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getPartners = async(req, res, next) => {

    try {
        const partners = await getPartnersService()

        res.json(partners)
    } catch (error) {
        next(error)
    }
 
}

const createPartner = async (req,res, next) => {
    try {
        const { image } = req.files;
        console.log(image)
        let imgName = v4() + ".jpg";
        image.mv(
            path.resolve(__dirname, "..", "public/assets/img/partner", imgName)
        );
        const memberData = await createPartnerService({
            image: imgName,
        });

        res.json(memberData);
    } catch (error) {
        next(error);
    }
}

const deletePartner = async (req,res, next) => {
    try {
        const {id} = req.params

        const partner = await deletePartnerService(id)

        res.json({partner, msg: 'Партнер удален'})

    } catch (error) {
        next(error)
    }
}

export {getPartners, createPartner, deletePartner}
