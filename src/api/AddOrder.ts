import axios from "axios";

export const addOrder = async (firstName: string, lastName: string, country: string, city: string, streetAddress: string, streetAddressTwo: string, zip: number | string, email: string, numberCode: string, user: string) => {
    try {
        await axios.post('http://localhost:3001/Orders', 
        { 
            firstName: firstName, 
            lastName: lastName, 
            country: country, 
            city: city, 
            streetAddress: streetAddress, 
            streetAddressTwo: streetAddressTwo, 
            zip: zip, 
            email: email, 
            numberCode: numberCode,
            user: user
        });
    } catch (error) {
        console.error(error);
    };
};