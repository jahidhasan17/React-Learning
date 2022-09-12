import React from "react";
import Button from "./Button";

class Clock extends React.Component {

    state = { 
        date: new Date(), 
        locale: 'us-US' 
    };

    componentDidMount() {
        //this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    tick = () => {
        this.setState({
            date: new Date()
        });
    }

    handleClick = (locale) => {
        this.setState({
            locale,
        });
        console.log(this.state);
    }

    render() {
        this.props = {
            lksdf : "sdlkf"
        }
        console.log("Clock component Rendered", this.props);
        const {date, locale} = this.state;
        return (
            <div>
                <h1>
                    <span className="text">{date.toLocaleTimeString(locale)}</span>
                </h1>
                <Button change={this.handleClick} locale={"bn-BD"}>
                    Click here
                </Button>
            </div>
        );
    }
}

export default Clock;
