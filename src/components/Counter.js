import React from "react";

class Counter extends React.Component {
    state = {
        count: 0,
    }

    incrementCount = () => {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }

    render() {
        console.log("Rendered Counter");
        const {render} = this.props;
        const {count} = this.state;
        return render(count, this.incrementCount);
    }
}

export default Counter;