import axios from 'axios';
import { Dispatch } from 'redux';
import { PlantAction, PlantTypes } from '../../../types/Plant';

export const getPlant = (plantId: number) => {
    return async (dispatch: Dispatch<PlantAction>) => {
        try {
            const response = await axios.get('http://localhost:3001/Plants/' + plantId);
            dispatch({ type: PlantTypes.GET_PLANT, plant: response.data });
        } catch (error) {
            console.error(error);
        }
    };
};

export const getSliderPlants = () => {
    return async (dispatch: Dispatch<PlantAction>) => {
        try {
            const response = await axios.get('http://localhost:3001/Plants');
            dispatch({ type: PlantTypes.GET_SLIDER_PLANTS, sliderPlants: response.data });
        } catch (error) {
            console.error(error);
        }
    };
};

export const getLargeIcon = (smallIcon: string) => {
    return async (dispatch: Dispatch<PlantAction>) => {
        dispatch({ type: PlantTypes.GET_LARGE_ICON, largeIcon: smallIcon });
    };
};