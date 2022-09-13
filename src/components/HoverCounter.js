import withCounter from "../HOC/withCounter";

const HoverCounter = (props) => {
    const { count, incrementCount } = props;
    console.log("Rendered HoverCounter");
    return (
        <div>
            <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>
        </div>
    );
};

export default withCounter(HoverCounter);