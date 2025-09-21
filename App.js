import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1",{id: "heading"}, "REACT Roudy! 🚀");
// console.log(heading);

const jsxElement = <span id="heading">REACT HEADING using JSX 🚀🚀</span>

//React component - 
const Title = function() {
    return(
        <h1>this is heading of TITLE</h1>
    );
};
const jsxHeading = (
    <div>
        {jsxElement}this is heading
        <Title></Title>
        <Title />
        {Title()}
    </div>
)


const number = 9999;
const HeadingComponent1 = () =>{
    return <div id="container">
        <h1 className="head">react COMPONENT heading😊</h1>

        {number}
        {jsxHeading}

        <Title />


    </div>
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);