import axios from "axios";

export const partnersListAction = () => {
    return async (dispatch) => {
        try {
            dispatch({type: "PARTNERS_REQUEST"})
            const {data: partners} = await axios('/api/v1/partners/about')
            dispatch({type: "PARTNERS_SUCCESS", payload: partners})
        }   catch (error) {
            dispatch({type: "PARTNERS_FAILED", error})
        }
    }
}
