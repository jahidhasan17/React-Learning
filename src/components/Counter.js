import { useState } from "react";

function Counter({name}) {
    const [count, setCount] = useState(0);

    let i = 0;
    const addFive = () => {
        while(i < 5) {
            setCount((count) => {
                return count + 1;
            });
            i++;
        }
    }

    const x = () => {
        console.log('x rendered');
    }
    x();

    console.log('Rendered Counter');
    return (
        <div>
            {console.log("return")}
            {count}
            <p>
                <button type="button" onClick={() => setCount(count + 1)}>
                    Add 1 {name}
                </button>
            </p>

            <p>
                <button type="button" onClick={addFive}>
                    Add 5
                </button>
            </p>
        </div>
    );

}

export default Counter;