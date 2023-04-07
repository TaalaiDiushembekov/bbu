import React from 'react';
import scanner from '../images/kolyaski-650x325.png'
import pustyshki from '../images/pustyshki-650x325.png'
import {Box} from "@material-ui/core";

const Scanner = () => {
    return (
        <Box mt={3} display="flex">
            <img src={scanner}/>
            <img src={pustyshki}/>
        </Box>
    );
};

export default Scanner;
