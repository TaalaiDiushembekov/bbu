import OrgModel from "../models/orgModel.js";
import ErrorService from "./errorService.js";

const createOrg = async (
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
) => {
    const oldOrg = await OrgModel.findOne({ org_social_number });

    if (oldOrg) {
        throw ErrorService.ServerInternalError(
            "This organization already registered"
        );
    }

    const orgData = await OrgModel.create({
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
    });

    orgData.save();

    return orgData;
};

const getOneOrg = async (_id) => {
    const orgData = await OrgModel.findOne({ _id })
        .populate("org_document")
        .exec();
    return orgData;
};

const getOrgs = async () => {
    const orgData = await OrgModel.find();

    return orgData;
};

const updateOrg = async (
    _id,
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
) => {
    // const org = await OrgModel.findOne({ _id });
    const org = await OrgModel.updateOne({_id}, {is_checked,
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
        org_civil_status})
    if (!org) throw ErrorService.BadRequest("Organizations not found");
    console.log(is_checked)

    return org;
};

export { createOrg, getOneOrg, getOrgs, updateOrg };
