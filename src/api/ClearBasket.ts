import axios from "axios";

export const clearBasket = async (id: number) => {
    try {
        await axios.delete('http://localhost:3001/Basket/' + id);
    } catch (error) {
        console.error(error);
    };
};
