// import ClickCounter from "./components/ClickCounter";
// import Counter from "./components/Counter";
import React from "react";
import ThemeContext from "./contexts/themeContext";
import Section from "./components/Section";



class App extends React.Component {

    state = {
        theme : 'light'
    }

    switchTheme = () => {
        this.setState(({theme}) => {
            return theme === 'dark' ? {theme: 'light'} : {theme: 'dark'};
        })
    }

    render() {

        const {theme} = this.state;
        console.log("Rendered App");

        return (
            <div>
                {/* <Counter render={(counter, incrementCount) => (
                    <ClickCounter count={counter} incrementCount={incrementCount} />
                )}/> */}
    
               
                <ThemeContext.Provider value={{ theme,switchTheme : this.switchTheme  }}>
                    <Section />
                </ThemeContext.Provider>
            </div>
        );
    }
}

export default App;