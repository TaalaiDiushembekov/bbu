import React from 'react';
import {Link} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import PersonIcon from "@material-ui/icons/Person";
import AssessmentIcon from "@material-ui/icons/Assessment";
import {useDispatch, useSelector} from "react-redux";
import {MenuItem} from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import {logout} from "../../redux/actions/userAction";
import { removeUser } from '../../redux/auth/auth.slice';
import { useLogoutMutation } from '../../redux/auth/auth.api';
const Header = () => {
    const userInfo = useSelector(s => s.auth)
    
    const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        console.log(anchorEl)
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const [logout] = useLogoutMutation();
    const handleLogout = async () => {
        dispatch(removeUser())
        await logout().unwrap();
    }

    return (
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
                {userInfo?.id ? (
                    <Link>
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
                            <MenuItem onClick={() => dispatch(logout())}
                                        component={Link} to='/'>Logout</MenuItem>
                        </Menu>
                    </Link>
                    ):
                    <Link to='/login'>
                        <IconButton>
                            <PersonIcon/>
                        </IconButton>
                    </Link>
                    {userInfo && userInfo?.accessToken ? (
                        <>
                            <IconButton color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                {userInfo.email}
                            </IconButton>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose} component={Link} to="/profile">Profile</MenuItem>
                                <MenuItem onClick={handleLogout}
                                            component={Link} to='/'>Logout</MenuItem>
                            </Menu>
                        </>
                        ):
                        <Link to='/login'>
                            <IconButton>
                                <PersonIcon/>
                            </IconButton>
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;
