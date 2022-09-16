import React, { useReducer } from 'react';
import ComponentB from './ComponentB';

export const counterContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return state;
    }
};

function ComponentA() {
    const [count, dispatch] = useReducer(reducer, initialState);
    console.log("ComponentA Rendered");
    return (
        <div className="app">
            <div>Count: {count}</div>
            <p>This is ComponentA</p>
            <counterContext.Provider value={{ dispatch }}>
                <ComponentB />
            </counterContext.Provider>
        </div>
    );
}

export default ComponentA;