import React, {useEffect} from 'react';
import Spinner from "./spinner";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {useDispatch, useSelector} from "react-redux";
import {usersListAction} from "../redux/actions/userAction.js";
import User from "../components/user.js"

const AllUsers = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(usersListAction())

    },[])
    const {users, isLoading} = useSelector((s) => s.usersList)
    return (
        <>
            <Typography variant="h4" component="h3">
                all users
            </Typography>
            {
                isLoading ? <Spinner /> : (
                    <Box mt={3}>

                        <Grid container spacing={3}>
                            {
                                users?.map((user) => (
                                    <User user={user} />))
                            }
                        </Grid>
                    </Box>
                )
            }

        </>
    );
};

export default AllUsers;
