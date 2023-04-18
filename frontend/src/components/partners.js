import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {partnersListAction} from "../actions/partnerAction";
import Typography from "@material-ui/core/Typography";
import Spinner from "./spinner";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import Partner from "./Partner/Partner";

const Partners = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(partnersListAction())

    },[])
    const {partners, isLoading} = useSelector((s) => s.partnersList)
    return (
        <>
            {/*<Typography variant="h4" component="h3">*/}
            {/*    all partners*/}
            {/*</Typography>*/}
            {isLoading ? <Spinner /> : (
                <Box mt={3}>
                    <Grid container spacing={3}>
                        {
                            partners?.map((partner) => (
                                <Partner
                                    key={partner._id}
                                    partner={partner} 
                                />))
                        }
                    </Grid>
                </Box>
            )}
        </>
    );
};

export default Partners;
