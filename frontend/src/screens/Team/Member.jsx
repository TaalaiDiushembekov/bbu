import React, { useEffect, useState } from "react";
import {
    useCreateMemberMutation,
    useGetOneMemberQuery,
    useGetTeamQuery,
    useUpdateMemberMutation,
} from "../../redux/team/team.api";

import "./Team.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import MemberForm from "../../components/MemberForm/MemberForm";

const Member = ({ type }) => {
    const { id } = useParams();
    const { data, isLoading } = useGetOneMemberQuery(id);

    console.log(data)
    
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return <MemberForm type={type} id={id} data={data} isLoading={isLoading}/>;
};

export default Member;
