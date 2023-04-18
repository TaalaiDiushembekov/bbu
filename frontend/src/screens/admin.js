import React from 'react';
import Register from "./register";
import AllUsers from "../components/allUsers.js";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Home from "./Home/Home";
import AddProduct from "../components/add_product";
import Manager from "../components/manager";
import AllProducts from "../components/allProducts.js";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
// import ManagerInfo from "../components/manager_info";



const useStyles = makeStyles(() => ({
    paper: {
        // display: 'flex',
        justifyContent: 'flex-end',
        marginLeft: '30%'
    }
}));
const Admin = () => {

    const classes = useStyles();
    return (
        <Container>
            <Grid container xs={12}>
                <Link to='/'>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}

                    >
                        Main
                    </Button>
                </Link>
                <Grid container xs={12}>

                    <Grid xs={6}>

                        <AllUsers />
                    </Grid>
                    <Grid xs={6} >
                        <Grid className={classes.paper} xs={10} >
                            <Register />
                        </Grid>

                    </Grid>

                    <Grid xs={6}>
                        <AllProducts />
                    </Grid>
                    <Grid xs={6} >
                        <Grid className={classes.paper} xs={10} >
                            <AddProduct />
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        </Container>


    );
};

export default Admin;
