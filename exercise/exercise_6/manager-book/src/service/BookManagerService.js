import axios from "axios";

export const getAll = async () => {
    try {
        const result = await axios.get("http://localhost:8080/books")
        return result.data
    } catch (error) {

    }
}

export const createBook = async (books) => {
    try {
        const result = await axios.post("http://localhost:8080/books", books)
        return result.data
    } catch (error) {

    }
}

export const getById = async (id) =>{
    try {
        const result = await axios.get(`http://localhost:8080/books/${id}`)
        return  result.data
    }catch (error) {

    }
}

export const updateBook = async (books, id) => {
    try {
        await axios.put(`http://localhost:8080/books/${id}`, books)
    } catch (error) {

    }
}

export const deleteBook = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/books/${id}`)
    }catch (error){

    }
}