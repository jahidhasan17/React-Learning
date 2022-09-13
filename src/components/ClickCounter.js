import withCounter from "../HOC/withCounter";

const ClickCounter = (props) => {
    const { count, incrementCount } = props;
    console.log("Rendered ClickCounter");
    return (
        <div>
            <button type="button" onClick={incrementCount}>
                Clicked {count} times
            </button>
        </div>
    );
};

export default withCounter(ClickCounter);