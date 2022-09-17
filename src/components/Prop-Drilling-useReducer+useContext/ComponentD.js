import { useContext } from 'react';
import { counterContext } from './ComponentA';

function ComponentD() {
    const countContext = useContext(counterContext);

    console.log("ComponentD Rendered");

    return (
        <div>
            <p>This is ComponentD</p>
            <button type="button" onClick={() => countContext.dispatch('increment')}>
                Increment
            </button>
            <button type="button" onClick={() => countContext.dispatch('decrement')}>
                Decrement
            </button>
        </div>
    );
}

export default ComponentD;