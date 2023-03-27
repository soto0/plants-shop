import axios from "axios";

export const ToggleQuantity = async (productId: number, productTitle: string, productPrice: number, user: string, productCount: number, productSize: string, productSKU: number, Id: number,) => {
    try {
        await axios.put('http://localhost:3001/Basket/' + Id, 
        {
            productId: productId, 
            productTitle: productTitle, 
            productPrice: productPrice, 
            user: user, 
            productAmount: productCount, 
            productSize: productSize, 
            productSKU: productSKU
        });
    } catch (error) {
        console.error(error);
    };
};