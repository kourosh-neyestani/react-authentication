const registrationReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SIGNUP_REQUEST':
            return {
                ...state,
                registering: true,
                registered: false
            }
        case 'SIGNUP_SUCCESS':
            return {
                ...state,
                registering: false,
                registered: true
            }
        case 'SIGNUP_FAILURE':
            return {
                ...state,
                registering: false,
                registered: false
            }
        default:
            return state
    }
}

export default registrationReducer