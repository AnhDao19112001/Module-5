import {Counter1} from "./Counter1";
import {Counter2} from "./Counter2";

export function Increment(){
    const [firstNum, setFirstNum] = Counter1()
    const [secondNum, setSecondNum] = Counter2()
    return (
        <>
        <h1>First Number: {firstNum}</h1>
            <button onClick={setFirstNum}>Add 1</button>
            <h1>Second Number: {secondNum}</h1>
            <button onClick={setSecondNum}>Add 2</button>
        </>
    )
}