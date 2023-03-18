import axios from "axios"
import { Dispatch } from "redux"
import { LoginAction, LoginTypes } from "../../../types/Login"

export const getLogin = (email: string, PopupToggle: any) => {
    return async (dispatch: Dispatch<LoginAction>) => {
        const response = await axios.get('http://localhost:3001/Users?email=' + email);
        
        if(response.data.length !== 0) {
            PopupToggle();
        };

        dispatch({
            type: LoginTypes.GET_USER,
            user: response.data[0],
            isAuth: response.data.length !== 0 ? true : false,
            error: response.data.length !== 0 ? undefined : 'Unknown user'
        });
    };
};