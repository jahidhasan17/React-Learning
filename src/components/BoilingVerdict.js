export default function BoilingVerdict({ celsius = 0 }) {

    console.log("BoilingVerdict Component Rendered");

    if (celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>Water would not boil.</p>;
}