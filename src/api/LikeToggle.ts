import axios from "axios";

export const addLike = async (likesProductId: number, user: string) => {
    await axios.post('http://localhost:3001/Likes', { likesProductId: likesProductId, user: user });
};

export const deleteLike = async (likesProductId: number) => {
    await axios.delete('http://localhost:3001/Likes/' + likesProductId);
};