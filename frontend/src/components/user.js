import React from 'react';
import Card from "@material-ui/core/Card";
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        maxWidth: 325,
        margin: '20px 10px 0',
        width: 300,
    },
    text: {
        textDecoration: 'none',
        color: '#2D2D2D;'
    },
    productImage: {
        objectFit: 'contain'
    }
});

const User = ({user}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <Link to={`/admin/${user._id}`} sx={{textDecoration: 'none'}} className={classes.text}>
                <Typography variant="body2" gutterBottom className={classes.text}>
                    {user.role}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    {user.org}
                </Typography>
                <Typography gutterBottom>
                    {user.email}
                </Typography>
            </Link>
        </Card>
    );
};

export default User;
