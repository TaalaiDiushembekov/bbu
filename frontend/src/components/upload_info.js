import React, {useState} from 'react';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch} from "react-redux";
import {userUploadInfoAction} from "../redux/actions/userAction.js";
import UploadInfoTwo from "./upload_info_two";


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
const UploadInfo = () => {


    const classes = useStyles();
    const [info, setInfo] = useState('')
    const dispatch = useDispatch()
    // const history = useHistory()
    // const location = useLocation()
    // const {userInfo, error} = useSelector((s) => s.userRegister)
    // const redirect = location.search ? location.search.split('=')[1] : '/admin'
    const handleSubmit = (e) => {
        e.preventDefault()
        setInfo('')

        dispatch(userUploadInfoAction(info))

    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Upload Info
                </Typography>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="fname"
                                info="info"
                                value={info}
                                variant="outlined"
                                required
                                fullWidth
                                id="Info"
                                label="Info"
                                autoFocus
                                onChange={(e) => setInfo(e.target.value)}
                            />
                        </Grid>
                        {/*<Grid item xs={12}>*/}
                        {/*    <TextField*/}
                        {/*        variant="outlined"*/}
                        {/*        required*/}
                        {/*        fullWidth*/}
                        {/*        id="email"*/}
                        {/*        value={email}*/}
                        {/*        label="Email Address"*/}
                        {/*        name="email"*/}
                        {/*        autoComplete="email"*/}
                        {/*        onChange={(e) => setEmail(e.target.value)}*/}
                        {/*    />*/}
                        {/*</Grid>*/}
                        {/*<Grid item xs={12}>*/}
                        {/*    <TextField*/}
                        {/*        variant="outlined"*/}
                        {/*        required*/}
                        {/*        fullWidth*/}
                        {/*        name="password"*/}
                        {/*        value={password}*/}
                        {/*        label="Password"*/}
                        {/*        type="password"*/}
                        {/*        id="password"*/}
                        {/*        autoComplete="current-password"*/}
                        {/*        onChange={(e) => setPassword(e.target.value)}*/}
                        {/*    />*/}
                        {/*</Grid>*/}
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
                        Upload
                    </Button>
                    {/*<Grid container justify="flex-end">*/}
                    {/*    <Grid item>*/}
                    {/*        <Link to="/login" href="#" variant="body2">*/}
                    {/*            Already have an account? Sign in*/}
                    {/*        </Link>*/}
                    {/*    </Grid>*/}
                    {/*</Grid>*/}
                </form>
            </div>
            <Box mt={5}>
                {/*<Copyright />*/}
            </Box>
        </Container>
    );
};

export default UploadInfo;
