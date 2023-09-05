import axios from "axios";
export const getAll = async () => {
    try {
        const result = await axios.get(`http://localhost:8080`)
        return result.data
    } catch (error) {
        return error
    }
}

export const edit = async (id, product) => {
    try {
        const result = await axios.put(`http://localhost:8081/products/${id}`, product)
        return result.data
    } catch (error) {
        return error;
    }
}

export const add = async (product) => {
    try {
        const result = await axios.post(`http://localhost:8080/add`, product)
        return result.data
    }catch (error){
        console.log(error);
    }
}
export const remove = async (id) => {
    try {
        const result = await axios.delete(`http://localhost:8081/products/${id}`)
        return result.data
    }catch (error){
        return error;
    }
}
export const findById = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8081/products/${id}`)
        return result.data
    }catch (error){
        return error;
    }
}
