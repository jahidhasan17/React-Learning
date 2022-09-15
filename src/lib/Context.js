class Context {
    constructor(value) {
        this.value = value;
    }

    Provider = ({children, value}) => {
        console.log("Called Provider");
        this.value = value;
        return children;
    }

    Consumer = ({children}) => {
        console.log("Called Consumer");
        return children(this.value);
    }
}

export default function createContext(value = null) {
    const context = new Context(value);
    console.log("Rendered Context");
    console.log(context);

    return {
        Provider: context.Provider,
        Consumer: context.Consumer
    }
}