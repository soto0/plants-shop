import axios from 'axios';
import { Dispatch } from 'redux';
import { AllPlantsAction, AllPlantsTypes } from './../../../types/AllPlants';

export const getAllPlants = () => {
    return async (dispatch: Dispatch<AllPlantsAction>) => {
        const response = await axios.get('http://localhost:3001/Plants');
        dispatch({ type: AllPlantsTypes.GET_ALL_PLANTS, allPlants: response.data });
    };
};