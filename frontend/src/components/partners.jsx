import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { partnersListAction } from "../redux/actions/partnerAction";
import Typography from "@material-ui/core/Typography";
import Spinner from "./spinner";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Partner from "./Partner/Partner";
import { useDeletePartnerMutation, useGetPartnersQuery } from '../redux/partners/partner.api';

const Partners = () => {
    const { data, isLoading } = useGetPartnersQuery();
    const role = JSON.parse(localStorage.getItem('role'))
    const [deletePartner, result] = useDeletePartnerMutation()
    const handleClick = (id) => {
        deletePartner(id)
    }
    return (
        <>
            {isLoading ? <Spinner /> : (
                    <Grid container spacing={1} >
                        {
                            data?.map((partner) => (
                                <Grid item style={{margin: '20px'}} key={partner._id} onClick={role === 'moderator' ? () => handleClick(partner._id) : null}>
                                    <Partner
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
