import {useState} from "react";

export function Counter1() {
    const [firstNum, setFirstNum] = useState(0)
    function useIncrement(){
        setFirstNum(firstNum + 1);
    }
    return [firstNum, useIncrement]
}