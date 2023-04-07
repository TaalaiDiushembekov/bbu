import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {productsListAction} from "../actions/productsAction";
import {usersListAction} from "../actions/userAction";
import Spinner from "./spinner";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Product from "./product";

const AllProducts = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(productsListAction());
        dispatch(usersListAction())
    },[])
    const { products, isLoading} = useSelector((s) => s.productsList )

    return (
        <>
            {/*<Step />*/}
            {
                isLoading ? <Spinner /> : (
                    <Box mt={3}>
                        <Typography variant="h4" component="h3">
                            All products
                        </Typography>
                        <Grid container spacing={3}>
                            {
                                products?.map((product) => (
                                    <Product product={product} />))


                            }

                            {/*{*/}
                            {/**/}
                            {/*    users?.map(user => <span>{ user.name} </span>)*/}
                            {/*}*/}
                        </Grid>
                    </Box>
                )
            }
            {/*<Scanner />*/}
        </>
    );
};

export default AllProducts;
