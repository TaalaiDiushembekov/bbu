import React from 'react';
import AllOrganizations from '../components/allOrganizations';
import { useGetAllOrgsQuery } from '../redux/organization/org.api';

const Organizations = () => {

    const {data, isLoading, error} = useGetAllOrgsQuery();

    
    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>


    return (
        <div style={{paddingTop: '75px'}}>
            <AllOrganizations org={data} />
        </div>
    );
};

export default Organizations;