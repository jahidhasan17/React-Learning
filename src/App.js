import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import Counter from "./components/Counter";

function App() {
    console.log("Rendered App");
    return (
        <div>
            <Counter render={(counter, incrementCount) => (
                <ClickCounter count={counter} incrementCount={incrementCount} />
            )}/>

            <Counter render={(counter, incrementCount) => (
                <HoverCounter count={counter} incrementCount={incrementCount} />
            )}/>
        </div>
    );
}

export default App;