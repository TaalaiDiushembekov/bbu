import React, {useEffect} from 'react';
import Card from "@material-ui/core/Card";
import {Link} from "react-router-dom";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {string} from "prop-types";
import ManagerInfo from "./manager_info.js";
import {useDispatch, useSelector} from "react-redux";
import {usersListAction} from "../actions/userAction";
import Manager from "./manager";


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    productImage: {
        objectFit: 'contain'
    }
})
const User = ({user}) => {
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(usersListAction())
    //
    // },[])
    // const {department_manager} = useSelector((s) => s.usersList)
    const classes = useStyles()
    return (
        <Grid item sm={12} md={6} lg={3} xl={3} key={user._id}>
            <Card className={classes.root}>
                <Link to={`/admin/${user._id}`}>
                    <CardActionArea>

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {user.name}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h2">
                               {user?.department_manager.map((manager) => (<Manager manager={manager} />))}
                               {/*<Manager />*/}
                            </Typography>

                        </CardContent>
                    </CardActionArea>
                </Link>

            </Card>
        </Grid>
    );
};

export default User;
