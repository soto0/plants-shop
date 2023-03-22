import axios from "axios";

export const addLike = async (user: string) => {
    await axios.post('http://localhost:3001/Likes', { user: user });
};

export const deleteLike = async (likesProductId: number) => {
    await axios.delete('http://localhost:3001/Likes/' + likesProductId);
};