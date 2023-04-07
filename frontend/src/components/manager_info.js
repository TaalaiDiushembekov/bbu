import React from 'react';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import {Link} from "react-router-dom";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";



const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    productImage: {
        objectFit: 'contain'
    }
})
const ManagerInfo = ({user}) => {

    const classes = useStyles()
    return (
        <Grid item sm={12} md={6} lg={3} xl={3}>
            <Card className={classes.root}>
                {/*<Link to={`/admin/${manager._id}`}>*/}
                    <CardActionArea>

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {user.name}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h2">
                                {/*{user?.department_manager}*/}
                            </Typography>

                        </CardContent>
                    </CardActionArea>
                {/*</Link>*/}

            </Card>
        </Grid>
    );
};

export default ManagerInfo;
