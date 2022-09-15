import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import ThemeContext from "../contexts/themeContext";

export default function Content() {
    console.log("Rendered Content");
    return (
        <div>
            <h1>This is a content</h1>
            <Counter render={(count, incrementCount) => {
                return (
                    <ThemeContext.Consumer>
                        {({theme, switchTheme}) => {
                            return <HoverCounter count={count} incrementCount={incrementCount} theme={theme} switchTheme={switchTheme}/>
                        }}
                    </ThemeContext.Consumer>
                )
            }}/>
        </div>
    );
}