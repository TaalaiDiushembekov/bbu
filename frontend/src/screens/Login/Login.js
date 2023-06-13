import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory, useLocation } from "react-router-dom";
import Message from "../../components/message";
import { useLoginMutation } from "../../redux/auth/auth.api.js";
import { setUser } from "../../redux/auth/auth.slice";
import { setOrganization } from "../../redux/organization/org.slice";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(12),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Login = ({data}) => {
    const [login, {isError}] = useLoginMutation();
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const { userInfo } = useSelector((s) => s.auth);
    console.log(userInfo)
    const [errorMsg, setErrorMsg] =  useState('')
    const redirect = location.search ? location.search.split("=")[1] : "/";

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userData = await login({ email, password }).unwrap()
            const {org} = userData
            dispatch(setUser({...userData}))
            dispatch(setOrganization({...org}))
            if(!isError && userData?.role === 'user'){
                history.push('/profile')
            }
            if(!isError && userData?.role === 'admin'){
                history.push('/admin')
            }
            if(!isError && userData?.role === 'moderator'){
                history.push('/')
            }
        } catch (error) {
            if(error.status === 403){
                setErrorMsg('Вы не активны');
            } 
            if(error.status === 400){
                setErrorMsg('Неверный адрес электронной почты или пароль.');
            }                     
        }
    };
    return (
        <div>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}></Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    {errorMsg && <Message type="warning">{errorMsg}</Message>}
                    <form
                        className={classes.form}
                        noValidate
                        onSubmit={(e) => handleSubmit(e)}
                    >
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox value="remember" color="primary" />
                            }
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                        {/*<Grid container>*/}
                        {/*    <Grid item>*/}
                        {/*        <Link to="/register" variant="body2">*/}
                        {/*            Don't have an account? Sign Up*/}
                        {/*        </Link>*/}
                        {/*    </Grid>*/}
                        {/*</Grid>*/}
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default Login;
