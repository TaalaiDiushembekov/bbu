import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT, USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS,
    USERS_REQUEST, USERS_SUCCESS, USERS_FAILED,
    USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS,
    USER_DETAILS_FAILED, USER_UPLOAD_INFO_REQUEST, USER_UPLOAD_INFO_SUCCESS, USER_UPLOAD_INFO_FAIL,
    USER_UPLOAD_INFO_TWO_REQUEST,
    USER_UPLOAD_INFO_TWO_SUCCESS,
    USER_UPLOAD_INFO_TWO_FAIL
} from "../../constants/userConstants";

const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {loading: true}
        case USER_LOGIN_SUCCESS:
            return {loading: false, userInfo: action.payload}
        case USER_LOGIN_FAIL:
            return {loading: false, error: action.payload}
        case USER_LOGOUT:
            return {}
        default:
            return state
    }
}
const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return {loading: true}
        case USER_REGISTER_SUCCESS:
            return {loading: false, userInfo: action.payload}
        case USER_REGISTER_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}
 const usersListReducer = (state = {users: []}, action) => {
    switch (action.type) {
        case USERS_REQUEST:
            return {...state, isLoading: true }
        case USERS_SUCCESS:
            return {isLoading: false, users: action.payload }
        case USERS_FAILED:
            return {isLoading: false, error: action.error}
        default:
            return state
    }
}
 const userDetailsReducer = (state = {user: {}}, action) => {
    switch (action.type) {
        case USER_DETAILS_REQUEST:
            return {...state, isLoading: true }
        case USER_DETAILS_SUCCESS:
            return {isLoading: false, user: action.payload }
        case USER_DETAILS_FAILED:
            return {isLoading: false, error: action.error}
        default:
            return state
    }
}

const userUploadInfoReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_UPLOAD_INFO_REQUEST:
            return {loading: true}
        case USER_UPLOAD_INFO_SUCCESS:
            return {loading: false, userInfo: action.payload}
        case USER_UPLOAD_INFO_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}
const userUploadInfoTwoReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_UPLOAD_INFO_TWO_REQUEST:
            return {loading: true}
        case USER_UPLOAD_INFO_TWO_SUCCESS:
            return {loading: false, userInfo: action.payload}
        case USER_UPLOAD_INFO_TWO_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export {
      userLoginReducer
    , userRegisterReducer
    ,usersListReducer
    , userDetailsReducer
    , userUploadInfoReducer
     ,userUploadInfoTwoReducer
}
