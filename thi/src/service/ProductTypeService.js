import axios from "axios";

const findAll = async () => {
    try {
        const result = await axios.get(`http://localhost:8080/productType`)
        return result.data
    }catch (error){
        return error;
    }
}
 const productTypeService = {
    findAll
 }
 export default productTypeService;