import React from 'react';
import {Link} from "react-router-dom";
import './Header.css'
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import PersonIcon from "@material-ui/icons/Person";
import AssessmentIcon from "@material-ui/icons/Assessment";
import {useDispatch, useSelector} from "react-redux";
import {Box, MenuItem} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import {logout} from "../../redux/actions/userAction";
import { removeUser } from '../../redux/auth/userLogin.slice';

const Header = () => {
    const userInfo = useSelector(s => s.auth)
    // const a = useSelector(s => s.auth)

    const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // console.log(a)
    return (
        <>
            <div className="header">
                <div className="header_box">
                    <Link to='/'>
                        <IconButton>
                            <HomeIcon/>
                        </IconButton>
                    </Link>
                    <Link  to='/about'>
                        <IconButton>
                            <AssessmentIcon/>
                        </IconButton>
                    </Link>
                    <Link  to='/team'>
                        <IconButton>
                            <MenuIcon/>
                        </IconButton>
                    </Link>
                    <Link>

                        {userInfo.email ? (
                            <Box>
                                <IconButton color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                    {userInfo.name}
                                </IconButton>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose} component={Link} to="/profile">Profile</MenuItem>
                                    <MenuItem onClick={() => dispatch(removeUser())}
                                              component={Link} to='/'>Logout</MenuItem>
                                </Menu>
                            </Box>
                            ):(

                                <Link to='/login'>
                                <IconButton>
                                    <PersonIcon/>
                                </IconButton>
                            </Link>
                                )

                        }
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Header;
