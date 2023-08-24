import axios from "axios";
export const getAll = async () => {
    try {
        const result = await axios.get("http://localhost:8080/todo");
        return result.data;
    }catch (error){
console.log(error);
    }
}

export const addTodo = async (todos) => {
    try{
        const result = await axios.post("http://localhost:8080/todo",todos)
        return result.data;
    } catch (error){

    }
}
