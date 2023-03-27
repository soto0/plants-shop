import axios from 'axios';
import { Dispatch } from 'redux';
import { PlantsAction, PlantsTypes } from '../../../types/Plants';

export const getPlants = (New?: boolean, Sale?: boolean, Category?: string, Size?: string, Price?: number) => {
    return async (dispatch: Dispatch<PlantsAction>) => {
        try {
            if(!Price) {
                const response = await axios.get(`http://localhost:3001/Plants?_limit=9${Size ? `&size=${Size}` : ''}${New ? `&new=${New}` : ''}${Sale ? `&sale=${Sale}` : ''}${Category ? `&category=${Category}` : ''}`);
                dispatch({ type: PlantsTypes.GET_PLANTS, plants: response.data });
            } else {
                const response = await axios.get(`http://localhost:3001/Plants?_limit=9${Size ? `&size=${Size}` : ''}${New ? `&new=${New}` : ''}${Sale ? `&sale=${Sale}` : ''}${Category ? `&category=${Category}` : ''}`);
                const sortResponse = response.data.filter((plant: any) => plant.price <= Price);
                dispatch({ type: PlantsTypes.GET_PLANTS, plants: sortResponse});
            }
        } catch (error) {
            console.error(error);
        };
    };
};