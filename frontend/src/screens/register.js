import React, {useEffect, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useLocation, Link} from "react-router-dom";
import axios from 'axios'
import {userRegisterAction} from "../redux/actions/userAction.js";

// function Copyright() {
//     return (
//         <Typography variant="body2" color="textSecondary" align="center">
//              {'Copyright © '}
//              <Link color="inherit" href="https://material-ui.com/">
//                  Your Website
//              </Link>{' '}
//              {new Date().getFullYear()}
//              {'.'}
//          </Typography>
//     )
//  }

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Register = () => {
    const classes = useStyles();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    // const history = useHistory()
    // const location = useLocation()
    // const {userInfo, error} = useSelector((s) => s.userRegister)
    // const redirect = location.search ? location.search.split('=')[1] : '/admin'
    const handleSubmit = (e) => {
        e.preventDefault()
        setName('')
        setEmail('')
        setPassword('')
        dispatch(userRegisterAction(name, email, password))

    }
     // useEffect(() => {
     //    if (setName, setEmail, setPassword){
     //        history.push(redirect)
     //    }

         // console.log('refreshing')
    // }, [dispatch])
    // useEffect(() => {
    //
    //
    // }, [])

    return (
        <Container component="main" maxWidth="xs">
             <CssBaseline />
             <div className={classes.paper}>
                 <Avatar className={classes.avatar}>
                     <LockOutlinedIcon />
                 </Avatar>
                 <Typography component="h1" variant="h5">
                     Sign up
                 </Typography>
                 <form className={classes.form} noValidate onSubmit={handleSubmit}>
                     <Grid container spacing={2}>
                         <Grid item xs={12}>
                             <TextField
                                autoComplete="fname"
                                name="name"
                                value={name}
                                variant="outlined"
                                required
                                fullWidth
                                id="Name"
                                label="Name"
                                autoFocus
                                onChange={(e) => setName(e.target.value)}
                            />
                         </Grid>
                         <Grid item xs={12}>
                             <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                value={email}
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                         </Grid>
                         <Grid item xs={12}>
                             <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                value={password}
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                         </Grid>
                         {/*<Grid item xs={12}>*/}
                         {/*    <FormControlLabel*/}
                         {/*       control={<Checkbox value="allowExtraEmails" color="primary" />}*/}
                         {/*       label="I want to receive inspiration, marketing promotions and updates via email."*/}
                         {/*   />*/}
                         {/*</Grid>*/}
                     </Grid>
                     <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}

                    >
                         Sign Up
                     </Button>
                     <Grid container justify="flex-end">
                         <Grid item>
                             <Link to="/login" href="#" variant="body2">
                                 Already have an account? Sign in
                             </Link>
                         </Grid>
                     </Grid>
                </form>
            </div>
            <Box mt={5}>
                {/*<Copyright />*/}
            </Box>
        </Container>

    );
}

export default Register
