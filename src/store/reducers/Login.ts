import { LoginState, LoginAction, LoginTypes } from './../../types/Login';

const initialState: LoginState = {
    User: [],
    IsAuth: false,
    Error: ''
};

export const LoginReducer = (state = initialState, action: LoginAction): LoginState => {
    switch (action.type) {
        case LoginTypes.GET_USER:
            return { ...state, User: action.user, IsAuth: action.isAuth, Error: action.error }
        default:
            return state
    }
}