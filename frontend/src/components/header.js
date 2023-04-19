import React from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import PersonIcon from '@material-ui/icons/Person'
import {useDispatch, useSelector} from "react-redux";
import {Menu, MenuItem} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {logout} from "../redux/actions/userAction.js"
import CardMedia from "@material-ui/core/CardMedia";
import flagUK from "../images/Flag_of_the_United_Kingdom.png"
import flagRU from "../images/Flag_of_Russia.png"


const useStyles = makeStyles((theme) => ({
    topMenu:{
        display: "flex",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Header = () => {
    const classes = useStyles()
    const {userInfo} = useSelector(s => s.userLogin)
    const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <header>
            <AppBar position="static" color={"primary"}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        BBU
                    </Typography>
                    {/*<Button color="inherit" id="en" className="translate" ><CardMedia*/}
                    {/*    component="img"*/}
                    {/*    alt="Contemplative Reptile"*/}
                    {/*    height="140"*/}
                    {/*    image={flagUK}*/}
                    {/*    title=""*/}
                    {/*/></Button>*/}
                    {/*<Button color="inherit" id="ru" className="translate" ><CardMedia*/}
                    {/*        component="img"*/}
                    {/*        alt="Contemplative Reptile"*/}
                    {/*        height="140"*/}
                    {/*        image={flagRU}*/}
                    {/*        title=""*/}
                    {/*    /></Button>*/}
                    <Button color="inherit" component={Link} to='/' className="translate" key="linkMain">Main</Button>
                    {/*<Button color="inherit" component={Link} to='/cart'><ShoppingCartIcon /></Button>*/}
                    {userInfo ? (
                            <Box>
                                <Button color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                    {userInfo.name}
                                </Button>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose} component={Link} to="/profile">Profile</MenuItem>
                                    <MenuItem onClick={() => dispatch(logout())}
                                              component={Link} to='/'>Logout</MenuItem>
                                </Menu>
                            </Box>
                        ):
                       <Button color="inherit" component={Link} to='/login'><PersonIcon /></Button>
                    }
                </Toolbar>
            </AppBar>
        </header>

    );
};

export default Header;
