import React from 'react';
import Spinner from "../../components/spinner.js";
import { useGetAllUsersQuery } from '../../redux/users/users.api.js';
import User from '../../components/user.js';
import './Admin.css';

const Admin = () => {
    const {data, isLoading, error} = useGetAllUsersQuery();
    console.log(data)

    if (error) return <div>Error: {error.message}</div>

    return (
        <div className='container'>
            <h4 className='title'>Все пользователи</h4>
            {isLoading ? <Spinner /> : (
                <div className='users-wrapper'>
                    {data?.filter(el => el.org !== null).map((user) => (
                        <User key={user._id} user={user} />))
                    }
                </div>
            )}
        </div>
    );
};

export default Admin;
