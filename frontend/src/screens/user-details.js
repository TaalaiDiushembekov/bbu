import React, { useEffect } from 'react'
import {useParams, useHistory, Link} from 'react-router-dom'
import Grid from "@material-ui/core/Grid";
import {Box, MenuItem} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import {useDispatch, useSelector} from "react-redux";
import {userDetailsAction} from "../actions/userAction.js";
import Spinner from "../components/spinner.js";
import Button from "@material-ui/core/Button";
import UploadInfo from "../components/upload_info.js";
import {userUploadInfoTwoAction} from "../actions/userAction.js";
import Typography from "@material-ui/core/Typography";
import Manager from "../components/manager";
import CardContent from "@material-ui/core/CardContent";



const useStyles = makeStyles({
    media:{
        height: '400px',
        objectFit: 'contain',
        padding: '30px'
    },
    formControl: {
        width: '100%'
    }
});

const UserDetails = () => {
    const {id} = useParams()
    const classes = useStyles()
    const dispatch = useDispatch()
    // const history = useHistory()
    const { user, isLoading } = useSelector(s => s.userDetails)
    const {salary} = useSelector(s => s.userUploadInfoTwo)
    // const [open, setOpen] = React.useState(false)
    // const [qt, setQt] = React.useState(0)
    useEffect(() => {
        dispatch(userDetailsAction(id))
        dispatch(userUploadInfoTwoAction(salary))
    },[id, dispatch])

    // const handleClose = () => {
    //     setOpen(false);
    // };
    //
    // const handleOpen = () => {
    //     setOpen(true);
    // };
    return (
        <Box my={3}>

          <Grid container xs={12}>



             <Grid container xs={8}>
                 {
                     isLoading ? (
                         <Spinner />
                     ) : (
                         <Grid >

                             <Grid item lg={4}>
                                 <List className={classes.root}>
                                     <ListItem>
                                         <ListItemText primary={user.name} />

                                     </ListItem>
                                     <Divider />
                                     <Divider />
                                     <Divider />



                                 </List>
                                 <List>
                                     <ListItem>
                                         <ListItemText primary={user.email}/>
                                     </ListItem>
                                 </List>
                             </Grid>
                             <Grid item lg={4}>
                                 <List className={classes.root}>
                                     <ListItem>
                                         <ListItemText primary={user.salary} />

                                     </ListItem>
                                     <ListItem>
                                         <ListItemText primary={user.organization} />

                                     </ListItem>
                                     <Divider />
                                     <Divider />
                                     <Divider />
                                 </List>


                             </Grid>



                         </Grid>

                     )
                 }
             </Grid>
              <Grid container direction="column" justify="center" xs={4}>
                  <Grid container >
                      <Button
                          type="submit"
                          // fullWidth
                          variant="contained"
                          color="primary"
                          // justifyContent="center"
                          component={Link} to='/admin'
                      >


                          назад

                      </Button>

                  </Grid>
                  <Grid>
                      <UploadInfo />
                  </Grid>
              </Grid>
          </Grid>
        </Box>
    );
};

export default UserDetails;
