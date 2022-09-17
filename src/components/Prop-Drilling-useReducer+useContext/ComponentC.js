import ComponentD from "./ComponentD";
import React from "react";

function ComponentC() {

    console.log("ComponentC Rendered");

    return (
        <div>
            <p>This is ComponentC</p>
            <ComponentD />
        </div>
    );
}

export default React.memo(ComponentC);