

import React from 'react';
import  ReactDOM  from 'react-dom/client';

const heading1 = React.createElement(
    "h1",
    {
        id: "title",
        className: "header_tag",
        style: {
            color: "red",
            
        },
        key :"h1-tag"
    },
    "heading 1"
);

// console.log(heading1)
const heading2 = React.createElement("h2", {key : "h2-tag"}, "heading 2");

let heading3 = React.createElement("h3",{key:"h3-tag"},"TCS Zindabad");


let li1 = React.createElement("li",{},"about us");
let li2 = React.createElement("li",{},"home");

let ul = React.createElement("ul",{},[li1,li2,React.createElement("li",{},"payment")]);
const container = React.createElement("div", {
    className:"container"
}, [heading1, heading2,heading3,ul]);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);







// babel-plugin-transform-remove-console     