import axios from 'axios';

export const addFood = async (foodData) => {
    try {
        const response = await axios.post('/api/v1/food/add', foodData);
        return response.data;
    } catch (error) {
        return error;
    }
}

export const getAllSession = async () => {
    try {
        const response = await axios.get('/api/v1/food/getSession');
        return response.data;
    } catch (error) {
        return error;
    }
}

export const addAddons = async (addonsData) => {
    try {
        const response = await axios.post(`/api/v1/food/addons`, addonsData);
        return response.data;
    } catch (error) {
        return error;
    }
}

export const getAddons = async (id) => {
    try {
        const response = await axios.get(`/api/v1/food/getAddons/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
}