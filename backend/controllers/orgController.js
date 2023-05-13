import {
    createOrg as createOrgService,
    getOneOrg as getOneOrgService,
    getOrgs as getOrgsService,
    updateOrg as updateOrgService,
} from "../services/orgService.js";
import { 
    registration as registrationService,
    updateUser as updateUserService    
} from "../services/userService.js";

const createOrg = async (req, res, next) => {
    try {
        const {
            org_email,
            org_name,
            org_pin,
            org_director,
            org_director_passport,
            org_accountant,
            org_accountant_passport,
            org_responsible_person,
            org_phone,
            org_social_number,
            org_activity,
            org_ownership,
            org_legal,
            org_civil_status,
        } = req.body;

        const orgData = await createOrgService(
            org_email,
            org_name,
            org_pin,
            org_director,
            org_director_passport,
            org_accountant,
            org_accountant_passport,
            org_responsible_person,
            org_phone,
            org_social_number,
            org_activity,
            org_ownership,
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

const updateOrg = async (req, res, next) => {
    try {
        
        const { id } = req.params;
        const {
            is_checked,
            org_email,
            org_name,
            org_pin,
            org_director,
            org_director_passport,
            org_accountant,
            org_accountant_passport,
            org_responsible_person,
            org_phone,
            org_social_number,
            org_activity,
            org_ownership,
            org_legal,
            org_civil_status,
            password,
            update,
            userId, 
        } = req.body;
        console.log('update', update)
        const orgData = await updateOrgService(
            id,
            is_checked,
            org_email,
            org_name,
            org_pin,
            org_director,
            org_director_passport,
            org_accountant,
            org_accountant_passport,
            org_responsible_person,
            org_phone,
            org_social_number,
            org_activity,
            org_ownership,
            org_legal,
            org_civil_status
        );
        if (!update) {
            const userData = await registrationService(
                org_email,
                password,
                "user"
            );
            res.json({ orgData, userData });
        }
        if(update && userId) {
            const userData = await updateUserService(userId, password)

            res.json({ orgData, userData });
        }
    } catch (error) {
        next(error);
    }
};

export { createOrg, getOneOrg, getOrgs, updateOrg };
