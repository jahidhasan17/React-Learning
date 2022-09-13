import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";

function App() {
    console.log("Rendered App");
    return (
        <div>
            <ClickCounter />
            <HoverCounter />
        </div>
    );
}

export default App;