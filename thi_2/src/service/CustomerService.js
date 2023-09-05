import axios from "axios";

const getAll = async () => {
    try {
        const result = await axios.get(`http://localhost:8081/customers`)
        return result.data
    } catch (error) {
        return error;
    }
}
const create = async (customer) => {
    try {
        const result = await axios.post(`http://localhost:8081/customers`, customer)
        return result.data
    } catch (error) {
        return error
    }
}
const findById = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8081/customers/${id}`)
        return result.data
    }catch (error){
        return error;
    }
}
const remove = async (id) => {
    try {
        const result = await axios.delete(`http://localhost:8081/customers/${id}`)
        return result.data
    }catch (error){
        return error
    }
}

const customerService = {
    getAll,
    create,
    findById,
    remove
}
export default customerService;