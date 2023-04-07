import axios from "axios"
import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT, USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS,
    USERS_REQUEST, USERS_SUCCESS, USERS_FAILED
    , USER_UPLOAD_INFO_REQUEST, USER_UPLOAD_INFO_SUCCESS, USER_UPLOAD_INFO_FAIL,
    USER_UPLOAD_INFO_TWO_REQUEST, USER_UPLOAD_INFO_TWO_SUCCESS, USER_UPLOAD_INFO_TWO_FAIL
} from "../constants/userConstants"

export const userLoginAction = (email, password) => {
    return async (dispatch, getState) => {
        try {
            dispatch({type: USER_LOGIN_REQUEST})
            const {data: user} = await axios.post('/api/v1/users/login', {email, password})
            dispatch({type: USER_LOGIN_SUCCESS, payload: user})
            localStorage.setItem('userInfo', JSON.stringify(getState().userLogin.userInfo))
        } catch (error) {
            dispatch({
                type: USER_LOGIN_FAIL, payload:
                error.response && error.response.data.message
                ? error.response.data.message: error.message
            })
        }
    }
}


export const userRegisterAction = (name, email, password) => {
    return async (dispatch) => {
        try {
            dispatch({type: USER_REGISTER_REQUEST})
            const {data: user} = await axios.post('/api/v1/users/', {name, email, password})
            dispatch({type: USER_REGISTER_SUCCESS, payload: user})
            localStorage.setItem('userInfo', JSON.stringify(user))
        } catch (error) {
            dispatch({
                type: USER_REGISTER_FAIL, payload:
                    error.response && error.response.data.message
                        ? error.response.data.message: error.message
            })
        }
    }
}

export const userUploadInfoTwoAction = (salary) => {
    return async (dispatch) => {
        try {
            dispatch({type: USER_UPLOAD_INFO_TWO_REQUEST})
            const {data: user} = await axios.post('/api/v1/users/', {salary})
            dispatch({type: USER_UPLOAD_INFO_TWO_SUCCESS, payload: user})
            localStorage.setItem('userInfo', JSON.stringify(user))
        } catch (error) {
            dispatch({
                type: USER_UPLOAD_INFO_TWO_FAIL, payload:
                    error.response && error.response.data.message
                        ? error.response.data.message: error.message
            })
        }
    }
}


export const userUploadInfoAction = () => {
    return async (dispatch) => {
        try {
            dispatch({type: USER_UPLOAD_INFO_REQUEST})
            const {data: info} = await axios.post('/api/v1/users/admin/:id')
            dispatch({type: USER_UPLOAD_INFO_SUCCESS, payload: info})
            localStorage.setItem('userInfo', JSON.stringify(info))
        } catch (error) {
            dispatch({
                type: USER_UPLOAD_INFO_FAIL, payload:
                    error.response && error.response.data.message
                        ? error.response.data.message: error.message
            })
        }
    }
}

export const usersListAction = () => {
    return async (dispatch) => {
        try {
            dispatch({type: USERS_REQUEST})
            const {data: users} = await axios('/api/v1/users/admin')
            dispatch({type: USERS_SUCCESS, payload: users})
        }   catch (error) {
            dispatch({type: USERS_FAILED, error})
        }
    }
}
export const userDetailsAction = (id) => {
    return async (dispatch) => {
        try {
            dispatch({type: "USER_DETAILS_REQUEST"})
            const {data: user} = await axios(`/api/v1/users/admin/${id}`)
            dispatch({type: "USER_DETAILS_SUCCESS", payload: user})
        }   catch (error) {
            dispatch({type: "USER_DETAILS_FAILED", error})
        }
    }
}

export const logout = () => {
    localStorage.removeItem('userInfo')
    return {type: USER_LOGOUT}
}
