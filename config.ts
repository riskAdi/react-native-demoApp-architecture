enum LoginActions {
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_FAILED= 'LOGIN FAILED',
    LOGIN_STARTED = 'LOGIN STARTED'
}

enum RegisterActions {
    REGISTER_SUCCESS = 'REGISTER_SUCCESS',
    REGISTER_FAILED= 'REGISTER_FAILED',
    REGISTER_STARTED = 'REGISTER_STARTED'
}
enum SESSION {
    TOKEN = 'token',
    EMAIL = 'email'
}
export {LoginActions,SESSION,RegisterActions};