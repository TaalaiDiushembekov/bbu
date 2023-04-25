import {
    createOrg as createOrgService,
    getOneOrg as getOneOrgService,
    getOrgs as getOrgsService,
    updateOrg as updateOrgService
} from "../services/orgService.js";

const createOrg = async (req, res, next) => {
    try {
        const {
            org_email,
            org_name,
            org_director,
            org_director_passport,
            org_phone,
            org_social_number,
            org_activity,
            org_legal,
            org_civil_status,
        } = req.body;

        const orgData = await createOrgService(
            org_email,
            org_name,
            org_director,
            org_director_passport,
            org_phone,
            org_social_number,
            org_activity,
            org_legal,
            org_civil_status
        );

        res.json(orgData);
    } catch (error) {
        next(error);
    }
};

const getOneOrg = async (req, res, next) => {
    try {
        const { id } = req.params;

        const orgData = await getOneOrgService(id);

        res.json(orgData);
    } catch (error) {
        next(error);
    }
};

const getOrgs = async (req, res, next) => {
    try {
        const orgData = await getOrgsService();

        res.json(orgData);
    } catch (error) {
        next(error);
    }
};

const updateOrg = async(req,res,next) => {
    try {
        const {id} = req.params
        
        const orgData = await updateOrgService(id)

        res.json(orgData)
    } catch (error) {
        next(error)
    }
}

export { createOrg, getOneOrg, getOrgs, updateOrg };
