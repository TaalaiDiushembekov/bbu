import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import {addProductAction} from "../redux/actions/productsAction";
import {useDispatch} from "react-redux";


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
    formControl: {
        marginTop: theme.spacing(1),

    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


const AddProduct = () => {

    const classes = useStyles();
    const [name, setName] = useState('')
    const [job, setJob] = useState('')
    const dispatch = useDispatch()


    const handleSubmit = (e) => {
        e.preventDefault()
        setName('')
        setJob('')
        dispatch(addProductAction(name, job))

    }
    // const [state, setState] = React.useState({
    //     age: '',
    //     name: 'hai',
    // });

    // const handleChange = (event) => {
    //     const name = event.target.name;
    //     setState({
    //         ...state,
    //         [name]: event.target.value,
    //     });
    // };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Add product
                </Typography>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid xs={12}>
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
                        <Grid xs={12}>
                            <TextField
                                // autoComplete="fname"
                                name="job"
                                value={job}
                                variant="outlined"
                                required
                                fullWidth
                                id="Job"
                                label="Job"
                                autoFocus
                                onChange={(e) => setJob(e.target.value)}
                            />
                        </Grid>
                        {/*<Grid  xs={12}>*/}
                        {/*    <FormControl variant="outlined" className={classes.formControl} fullWidth >*/}
                        {/*        <InputLabel htmlFor="outlined-age-native-simple">Product</InputLabel>*/}
                        {/*        <Select*/}
                        {/*            native*/}
                        {/*            value={state.age}*/}
                        {/*            onChange={handleChange}*/}

                        {/*            label="Product"*/}
                        {/*            inputProps={{*/}
                        {/*                name: 'age',*/}
                        {/*                id: 'outlined-age-native-simple',*/}
                        {/*            }}*/}
                        {/*        >*/}
                        {/*            <option aria-label="None" value="" />*/}
                        {/*            <option value={10}>Ten</option>*/}
                        {/*            <option value={20}>Twenty</option>*/}
                        {/*            <option value={30}>Thirty</option>*/}
                        {/*        </Select>*/}
                        {/*    </FormControl>*/}
                        {/*</Grid>*/}


                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}

                    >
                        Add product
                    </Button>

                </form>
            </div>

        </Container>
    );
};

export default AddProduct;
