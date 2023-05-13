import React, {useEffect} from 'react';
import Spinner from "./spinner";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {useDispatch, useSelector} from "react-redux";
import {usersListAction} from "../redux/actions/userAction.js";
import User from "../components/user.js"
import { useGetAllUsersQuery } from '../redux/users/users.api';

const AllUsers = () => {

    const {data, isLoading, error} = useGetAllUsersQuery();
    console.log(data)

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>
    

    

    return (
        <>
        
        
            <Typography variant="h4" component="h3">
                all users
            </Typography>
            {
                isLoading ? <Spinner /> : (
                    <Box mt={3}>

                        <Grid container>
                            {
                                data?.filter(el => el.org !== null).map((user) => (
                                    <User key={user._id} user={user} />))
                            }
                        </Grid>
                    </Box>
                )
            }

        </>
    );
};

export default AllUsers;
