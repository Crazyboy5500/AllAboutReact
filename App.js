import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", {id:"parent"},
    [
        React.createElement("div",{id:"child1"},
            [React.createElement("h1",{},"updation on child1 in an instant displayed") , React.createElement("h2",{},"I am a h2 tag of child1")]
        ),
        React.createElement("div",{id:"child2"},
            [React.createElement("h1",{},"I am a h1 tag of child2") , React.createElement("h2",{},"I am a h2 tag of child2")]
        )
    ]
);

console.log(parent);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);