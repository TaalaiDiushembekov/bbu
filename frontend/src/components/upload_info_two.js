import React, {useState} from 'react';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import {userUploadInfoTwoAction} from "../redux/actions/userAction";
import {useDispatch} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import { useUploadDocMutation } from '../redux/documents/docs.api';


const useStyles = makeStyles((theme) => ({
    paper: {
        
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
const UploadInfoTwo = ({org_id}) => {

    const classes = useStyles();
    const [uploadDoc, response] = useUploadDocMutation()
    const [document, setDocument] = useState({
        name: '',
        link: '',
        org_id
    })

    console.log(document)
    const inputChangeHandler = (e) => {
       const {name, value} = e.target;
       setDocument((prev) => ({ ...prev, [name]: value }));
       console.log(document)
    }
    const dispatch = useDispatch()
    const handleSubmit = async (e) => {
        e.preventDefault()
        await uploadDoc(document)
    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography variant="h6">
                    Добавить документ пользователю
                </Typography>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="fname"
                                salary="salary"
                                value={document.name}
                                variant="outlined"
                                required
                                fullWidth
                                id="salary"
                                label="Имя"
                                name='name'
                                onChange={inputChangeHandler}
                            />
                        </Grid><Grid item xs={12}>
                            <TextField
                                autoComplete="fname"
                                salary="salary"
                                value={document.link}
                                variant="outlined"
                                required
                                fullWidth
                                id="salary"
                                label="Ссылка"
                                name='link'
                                onChange={inputChangeHandler}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}

                    >
                        Добавить документ
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

export default UploadInfoTwo;
