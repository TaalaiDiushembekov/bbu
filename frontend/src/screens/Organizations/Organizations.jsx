import React from 'react';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useGetAllOrgsQuery } from '../../redux/organization/org.api';
import './Organizations.css';

const Organizations = () => {
    const {data, isLoading, error} = useGetAllOrgsQuery();

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

    return (
        <div className="container">
            <h3 className='title'>Ожидают проверки</h3>
            <div className='org-wrapper'>
                {data.filter(org => !org.is_checked ).map((org) => (
                    <div className='org-card'>
                        <Link to={`/organizations/${org._id}`}>
                            <p>{org?.org_name}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Organizations;