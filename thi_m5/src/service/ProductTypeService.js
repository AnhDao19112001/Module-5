import axios from "axios";

export const getAllType = async () => {
    try {
        const result = await axios.get(`http://localhost:8080/type`)
        return result.data
    }catch (error){
        return error;
    }
}
