import axios from 'axios';

export const addFood = async (foodData) => {
    try {
        const response = await axios.post('/api/v1/food/add', foodData);
        return response.data;
    } catch (error) {
        return error;
    }
}