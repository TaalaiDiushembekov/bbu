export const partnersListReducer = (state = {partners: []}, action) => {
    switch (action.type) {
        case "PARTNERS_REQUEST":
            return {...state, isLoading: true }
        case "PARTNERS_SUCCESS":
            return {isLoading: false, partners: action.payload }
        case "PARTNERS_FAILED":
            return {isLoading: false, error: action.error}
        default:
            return state
    }
}
