export interface LoginState {
    User: any,
    IsAuth: boolean,
    Error: string | undefined
}

export enum LoginTypes {
    GET_USER = 'GET_USER'
};

interface getUser {
    type: LoginTypes.GET_USER
    user: [],
    isAuth: boolean,
    error: string  | undefined
};

export type LoginAction = getUser;