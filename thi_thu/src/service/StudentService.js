import axios from "axios";
export const getAllList = async (page, search) => {
    try {
        const result = await axios.get(`http://localhost:8080/student?_page=${page}&_limit=3&name_like=${search}`);
        return result.data;
    } catch (e) {
        return 500;
    }
}

export const getAll = async () => {
    try {
        const result = await axios.get("http://localhost:8082/student")
        return result.data;
    } catch (error){
        return error;
    }
}

export const createStudent = async (student) => {
    try{
        const result = await axios.post("http://localhost:8082/student", student)
        return result.data;
    }catch (error){
        return error;
    }
}

export const detailStudent = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8082/student/${id}`)
        return result.data;
    }catch (error){
        return error;
    }
}

export const updateStudent = async (id, student) => {
    try {
        const result = await axios.put(`http://localhost:8082/student/${id}`,student)
        return result.data;
    }catch (error){
        return error;
    }
}

export const deleteStudent = async (id) => {
    try {
        const result = await axios.delete(`http://localhost:8082/student/${id}`)
        return result.data;
    }catch (error){
        return error;
    }
}