import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
function useCounter(originalNumber,step){
    const [count, setCount] = React.useState(originalNumber);

    const increment = () => {
        setCount(count + step)
    }
    return(
        [count, increment]
    )
}
function Counter() {
    const [count1, setCount1] = useCounter(0,1);
    const [count2, setCount2] = useCounter(0,2);

    return (
        <>
            <div className="form-control">

                <div>
                    <button className="btn btn-primary" onClick={setCount1}>Add 1</button>
                    Value 1 = {count1}
                </div>
                <br/>

                <div>
                    <button className="btn btn-primary" onClick={setCount2}>Add 2</button>
                    Value 2 = {count2}
                </div>
            </div>
        </>
    );
}

export default Counter;