import axios from "axios";

export const getCatService = async() => {
    
    const response = await axios ('https://api.thecatapi.com/v1/images/search');

    return response.data; 
    
}
