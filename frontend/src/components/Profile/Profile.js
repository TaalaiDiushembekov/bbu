import React, {useEffect} from 'react';
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import {Menu, MenuItem} from "@material-ui/core";
import {Link, useHistory, useLocation} from "react-router-dom";
import {logout} from "../../actions/userAction";
import PersonIcon from "@material-ui/icons/Person";
import {useSelector} from "react-redux";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    productImage: {
        objectFit: 'contain'
    }
})
const Profile = () => {

    // const history = useHistory()
    // const location = useLocation()
    //
    // const redirect = location.search ? location.search.split('=')[1] : '/'

    const classes = useStyles()
    const {userInfo} = useSelector(s => s.userLogin)

    // useEffect(() => {
    //     if (userInfo){
    //         history.push(redirect)
    //     }
    // }, [userInfo, history])

    return (
        <div>
            { (
                <>
                    <Grid item sm={12} md={6} lg={3} xl={3}
                          // key={product._id}
                    >
                        <Card className={classes.root}>
                            <Link
                                // to={`/product/${product._id}`}
                            >
                                <CardActionArea>

                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {userInfo.name}
                                        </Typography>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {userInfo.email}
                                        </Typography>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {userInfo.organization}
                                        </Typography>

                                    </CardContent>
                                </CardActionArea>
                            </Link>

                        </Card>
                    </Grid>

                </>

                )
            }
        </div>
    );
};

export default Profile;
