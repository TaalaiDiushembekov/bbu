import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import PersonIcon from "@material-ui/icons/Person";
import AssessmentIcon from "@material-ui/icons/Assessment";
import { useDispatch, useSelector } from "react-redux";
import { MenuItem } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import "./Header.css";
import { removeUser } from "../../redux/auth/auth.slice";
import { useLogoutMutation } from "../../redux/auth/auth.api";
const CustomMenuItem = forwardRef(({role , ...rest}, ref) => {

    if(role === 'admin'){
        return (
            <div ref={ref}>
                        
             <MenuItem {...rest} to='/organizations'>
                Активировать клиентов
            </MenuItem>
            <MenuItem {...rest} to='/admin'>
                Клиенты
            </MenuItem>
            </div>
        );
    }

    if(role === 'moderator'){
        return (
            <div ref={ref}>
                        
             <MenuItem {...rest} to='/add-tariff'>
                Добавить тариф
            </MenuItem>
            <MenuItem {...rest} to='/partner/add'>
                Добавить партнера
            </MenuItem>
            <MenuItem {...rest} to='/team/add'>
                Добавить сотрудника
            </MenuItem>
            </div>
        );
    }

    if(role === 'user'){
        return (
            <MenuItem {...rest} to='/profile' ref={ref}>
                Перейти в профиль
            </MenuItem>
        );
    }


});
const Header = () => {
    const userInfo = useSelector((s) => s.auth);

    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [logout] = useLogoutMutation();
    const handleLogout = async () => {
        dispatch(removeUser());
        await logout().unwrap();
    };

    return (
        <>
            <div className="header">
                <div className="header_box">
                    <Link to="/">
                        <IconButton>
                            <HomeIcon />
                        </IconButton>
                    </Link>
                    <Link to="/about">
                        <IconButton>
                            <AssessmentIcon />
                        </IconButton>
                    </Link>
                    <Link to="/team">
                        <IconButton>
                            <MenuIcon />
                        </IconButton>
                    </Link>
                    {userInfo && userInfo?.accessToken ? (
                        <>
                            <IconButton
                                color="inherit"
                                aria-controls="simple-menu"
                                aria-haspopup="true"
                                onClick={handleClick}
                            >
                                {userInfo.email}
                            </IconButton>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                    <CustomMenuItem
                                        onClick={handleClose}
                                        component={Link}
                                        role={userInfo.role}
                                    /> 

                                <MenuItem
                                    onClick={handleLogout}
                                    component={Link}
                                    to="/"
                                >
                                    Выйти
                                </MenuItem>
                            </Menu>
                        </>
                    ) : (
                        <Link to="/login">
                            <IconButton>
                                <PersonIcon />
                            </IconButton>
                        </Link>
                    )}
                </div>
            </div>
        </>
    );
};



export default Header;
