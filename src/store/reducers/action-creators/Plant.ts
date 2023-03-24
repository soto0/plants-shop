import axios from 'axios';
import { Dispatch } from 'redux';
import { PlantAction, PlantTypes } from '../../../types/Plant';

export const getPlant = () => {
    return async (dispatch: Dispatch<PlantAction>) => {
        try {
            const response = await axios.get('http://localhost:3001/Plants');
            dispatch({ type: PlantTypes.GET_SLIDER_PLANTS, sliderPlants: response.data });
        } catch (error) {
            console.error(error);
        }
    };
};