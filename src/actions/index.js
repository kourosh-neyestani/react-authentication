export const signupRequest = ({ username, password }) => {
    return {
        type: 'SIGNUP_REQUEST',
        username,
        password
    };
}