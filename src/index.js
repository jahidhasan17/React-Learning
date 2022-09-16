//import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
//import reportWebVitals from './reportWebVitals';

let states = [];
let stateIndex = -1;

function useState(defaultValue) {
    const index = ++stateIndex;
    
    if(states[index]) return states[index];

    const setValue = (newValue) => {
        states[index][0] = newValue;
        console.log(index, newValue, states);
        renderComponentt();
    }

    const returnArray = [defaultValue, setValue];
    states[index] = returnArray;
    return returnArray;
}


function App() {
    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState(null);

    const handleInput = (e) => {
        const inputValue = e.target.value;
        const updatedWarning = inputValue.includes('.js')
            ? 'You need javascript skill to complete the task. Do you have it?'
            : null;
        setTodo(inputValue);
        setWarning(updatedWarning);
    }

    return (
        <div>
            <p>{todo}</p>
            <p>
                <textarea name="todo"  cols="20" rows="2" value={todo} onChange={handleInput}></textarea>
            </p>
            <hr />
            <h2>{warning || 'Good choice!'}</h2>
        </div>
    )
}


function renderComponentt() {
    stateIndex = -1;
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <App />
    );    
}

renderComponentt();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
