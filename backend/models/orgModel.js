import { Schema, SchemaType, model } from "mongoose";

const orgModel = new Schema({
    is_checked: {
        type: Boolean,
        default: false,
    },
    org_email: {
        type: String,
    },
    org_name: {
        type: String,
        required: true,
    },
    org_pin: {
        type: Number,
        required: true,
    },
    org_director: {
        type: String,
        required: true,
    },
    org_director_passport: {
        series: {
            type: String,
            required: true,
        },
        authority: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
    },
    org_accountant: {
        type: String
    },
    org_accountant_passport: {
        series: {
            type: String,
        },
        authority: {
            type: String,
        },
        date: {
            type: String,
        },
    },
    org_responsible_person: {
        type: String,
        required: true,
    },
    org_phone: {
        type: Number,
        required: true,
    },
    org_social_number: {
        type: Number,
        required: true,
        unique: true,
    },
    org_activity: {
        type: String,
        required: true,
    },
    org_ownership: {
        type: String
    },
    org_legal: {
        type: String,
        required: true,
    },
    org_civil_status: {
        type: String,
        required: true,
    },
    org_document: [
        {
            type: Schema.Types.ObjectId,
            ref: "documents",
        },
    ],
});

const OrgModel = model("organization", orgModel);

export default OrgModel;
