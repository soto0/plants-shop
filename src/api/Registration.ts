import axios from "axios";

export const Registration = async (userName: string, email: string, password: string, setError: any, popupToggle: any, setUrl: any) => {
    try {
        const User = await axios.get('http://localhost:3001/Users?userName=' + userName);

        if (User.data[0]?.userName === userName) {
            setError(false);
        } else {
            await axios.post('http://localhost:3001/Users', { userName: userName, email: email, password: password });
            popupToggle();
            setUrl('Login');
        }
    } catch (error) {
        console.error(error);
    }
};