import axios from "axios";

const getAll = async () => {
    try {
        const result = await axios.get(`http://localhost:8080/productList`)
        return result.data
    }catch (error){
        return error;
    }
}

const createProduct = async (products) => {
    try {
        const result = await axios.post(`http://localhost:8080/productList`,products)
        return result.data
    }catch (error){
        return error;
    }
}
const UpdateProduct = async  (id, products) => {
    try {
         const result = await axios.put(`http://localhost:8080/productList/${id}`,products)
        return result.data
    }catch (error){
        return error;
    }
}
const findById = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8080/productList/${id}`)
        return result.data
    }catch (error){
        return error;
    }
}
const deleteProduct = async (id) => {
    try {
        const result = await axios.delete(`http://localhost:8080/productList/${id}`)
        return result.data
    }catch (error){
        return error;
    }
}
const searchByName = async (name) => {
    try {
        const result = await axios.get(`http://localhost:8080/productList?name_like=${name}`)
        return result.data;
    }catch (error){
        return error;
    }
}
const productService = {
    getAll,
    createProduct,
    UpdateProduct,
    findById,
    deleteProduct,
    searchByName
}
export default productService;