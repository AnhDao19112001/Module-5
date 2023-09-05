import axios from "axios";

const getAll = async () => {
    try {
        const result = await axios.get(`http://localhost:8081/customerType`)
        return result.data
    }catch (error){
        return error;
    }
}
const customerType = {
    getAll
}
export default customerType;