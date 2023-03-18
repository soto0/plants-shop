import axios from "axios";

export const Registration = async (userName: string, email: string, password: string) => {
    await axios.post('http://localhost:3001/Users', {id: 0 + userName, userName: userName, email: email, password: password});
};