import React from 'react';
import AllUsers from "../components/allUsers.js";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(() => ({
    paper: {
        paddingTop: '75px'
    }
}));
const Admin = () => {

    const classes = useStyles();
    return (
        <div className={classes.paper}>
            <AllUsers/>
        </div>

    );
};

export default Admin;
