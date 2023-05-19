import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import RegisterUser from './RegisterUser/RegisterUser';
import { useGetOneOrgQuery } from '../redux/organization/org.api';

const OrgDetails = () => {
    const { id } = useParams();

    const {data, isLoading} = useGetOneOrgQuery(id)

    if(isLoading)
        return <div>loading...</div>

    return (
        <div>
            <RegisterUser {...data} title={'Подтверждение пользователя'} type={'approve'} id={id}/>
        </div>
    );
};

export default OrgDetails;