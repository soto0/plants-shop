import axios from "axios";

export const addProductToBasket = async (productId: number, productTitle: string, productPrice: number, user: string) => {
    await axios.post('http://localhost:3001/Basket', 
    { 
        productId: productId, 
        productTitle: productTitle, 
        productPrice: productPrice, 
        user: user 
    });
}

export const deleteProductFromBasket = async (productId: number) => {
    await axios.delete('http://localhost:3001/Basket/' + productId);
};