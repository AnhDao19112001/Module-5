import {useState} from "react";

export function Counter2() {
    const [secondNum, setSecondNum] = useState(0)
    function useIncrement(){
        setSecondNum(secondNum + 2);
    }
    return [secondNum, useIncrement]
}