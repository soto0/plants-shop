import axios from "axios";

export const Registration = async (userName: string, email: string, password: string) => {
    await axios.post('http://localhost:3001/Users', {userName: userName, email: email, password: password});
};