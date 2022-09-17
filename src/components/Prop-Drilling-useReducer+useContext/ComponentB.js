import ComponentC from "./ComponentC";

function ComponentB() {

    console.log("ComponentB Rendered");

    return (
        <div>
            <p>This is ComponentB</p>
            <ComponentC />
        </div>
    );
}

export default ComponentB;