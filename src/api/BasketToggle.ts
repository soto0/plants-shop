import axios from "axios";

export const addProductToBasket = async (productId: number, productTitle: string, productPrice: number, user: string, productAmount: number, productSize: string, productSKU: number) => {
    try {
        await axios.post('http://localhost:3001/Basket',
            {
                productId: productId,
                productTitle: productTitle,
                productPrice: productPrice,
                user: user,
                productAmount: productAmount,
                productSize: productSize,
                productSKU: productSKU
            });
    } catch (error) {
        console.error(error);
    }
}

export const deleteProductFromBasket = async (productId: number) => {
    try {
        await axios.delete('http://localhost:3001/Basket/' + productId);
    } catch (error) {
        console.error(error);
    }
};