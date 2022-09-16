
import React from 'react';

export default class MyComponent extends React.Component {
    state = {
        count: 0,
        date: new Date()
    }

    componentDidMount() {
        console.log('Component Mount');
        const {count} = this.state;
        document.title = `Clicked ${count} times`;
        this.interval = setInterval(this.tick, 1000);
    }

    tick = () => {
        console.log('clock ticking');
        this.setState({
            date: new Date()
        })
    }

    componentWillUnmount() {
        console.log('Component UnMount');
        clearInterval(this.interval);
    }

    componentDidUpdate() {
        console.log('Component Update');
        const {count} = this.state;
        document.title = `Clicked ${count} times`;
    }

    addClick = () => {
        this.setState(({ count }) => ({
            count: count + 1,
        }));
    };

    render() {
        const {date} = this.state;

        return (
            <div>
                <p>Time: {date.toLocaleTimeString()}</p>
                <p>
                    <button type='button' onClick={this.addClick}>
                        Click
                    </button>
                </p>
            </div>
        );
    }
}