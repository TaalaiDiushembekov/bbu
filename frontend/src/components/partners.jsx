import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { partnersListAction } from "../redux/actions/partnerAction";
import Typography from "@material-ui/core/Typography";
import Spinner from "./spinner";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Partner from "./Partner/Partner";
import { useGetPartnersQuery } from '../redux/partners/partner.api';

const Partners = () => {
    const { data, isLoading } = useGetPartnersQuery();
    return (
        <>
            {isLoading ? <Spinner /> : (
                    <Grid container spacing={20} >
                        {
                            data?.map((partner) => (
                                <Grid item style={{margin: '20px'}} >
                                    <Partner
                                        key={partner._id}
                                        partner={partner}
                                    />
                                </Grid>
                            ))
                        }
                    </Grid>
            )}
        </>
    );
};

export default Partners;
