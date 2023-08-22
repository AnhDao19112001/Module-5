import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
function Counter() {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const handleIncrease1 = () => {
        const newValue1 = count + 1;
        setCount(newValue1);
    };

    const handleIncrease2 = () => {
        const newValue2 = count1 + 2;
        setCount1(newValue2);
    }

    return (
        <>
            <div className="form-control">

                <div>
                    <button className="btn btn-primary" onClick={handleIncrease1}>Add 1</button>
                    Value 1 = {count}
                </div>
                <br/>

                <div>
                    <button className="btn btn-primary" onClick={handleIncrease2}>Add 2</button>
                    Value 2 = {count1}
                </div>
            </div>
        </>
    );
}

export default Counter;