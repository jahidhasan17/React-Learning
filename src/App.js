import { useState } from "react";
import LayoutComponentOne from "./components/LayoutComponentOne";
import LayoutComponentTwo from "./components/LayoutComponentTwo";

export default function App() {

    const [isOne, setOne] = useState(true);

    return (
        <div className="app">
            {isOne ? <LayoutComponentOne /> : <LayoutComponentTwo />}
            <button onClick={() => setOne(!isOne)}>{isOne ? "Hide One" : "Show One"}</button>
        </div>
    );
}
