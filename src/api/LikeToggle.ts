import axios from "axios";

export const addLike = async (likesProductId: number, user: string) => {
    try {
        await axios.post('http://localhost:3001/Likes', { likesProductId: likesProductId, user: user });
    } catch (error) {
        console.error(error);
    }
};

export const deleteLike = async (likesProductId: number) => {
    try {
        await axios.delete('http://localhost:3001/Likes/' + likesProductId);
    } catch (error) {
        console.error(error);
    }
};