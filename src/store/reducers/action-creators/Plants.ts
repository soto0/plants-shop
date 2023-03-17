import axios from 'axios';
import { Dispatch } from 'redux';
import { PlantsAction, PlantsTypes } from '../../../types/Plants';

export const getPlants = (New?: boolean, Sale?: boolean, Category?: string, Size?: string, Price?: number) => {
    return async (dispatch: Dispatch<PlantsAction>) => {
        if(New) {
            const response = await axios.get('http://localhost:3001/Plants?new=' + New);
            dispatch({ type: PlantsTypes.GET_PLANTS, plants: response.data });
        } else if (Sale) {
            const response = await axios.get('http://localhost:3001/Plants?sale=' + Sale);
            dispatch({ type: PlantsTypes.GET_PLANTS, plants: response.data });
        } else if (Size) {
            const response = await axios.get('http://localhost:3001/Plants?size=' + Size);
            dispatch({ type: PlantsTypes.GET_PLANTS, plants: response.data });
        } else if (Category) {
            const response = await axios.get('http://localhost:3001/Plants?category=' + Category);
            dispatch({ type: PlantsTypes.GET_PLANTS, plants: response.data });
        } else if (Price) {
            const response = await axios.get('http://localhost:3001/Plants');
            const sortResponse = response.data.filter((plant: any) => plant.price <= Price);
            dispatch({ type: PlantsTypes.GET_PLANTS, plants: sortResponse });
        } else {
            const response = await axios.get('http://localhost:3001/Plants');
            dispatch({ type: PlantsTypes.GET_PLANTS, plants: response.data });
        }
    };
};