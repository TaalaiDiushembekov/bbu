import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";


const Manager = ({manager}) => {

    return (
        <Grid item sm={12} md={6} lg={3} xl={3} >



                            <Typography gutterBottom variant="h5" component="h2">
                                {/*<Link*/}
                                {/*    // to={`${manager.job}`}*/}
                                {/*    // target="_blank"*/}

                                {/*>*/}
                                    <a
                                        href={`${manager.job}`}
                                        // target="_blank"
                                        rel="noopener"
                                    >
                                        1
                                    </a>
                                {/*</Link>*/}
                                {/*{manager.job}*/}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h2">
                                {manager.brand}
                            </Typography>

        </Grid>
    );
};


export default Manager;
