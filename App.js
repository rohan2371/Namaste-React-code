const heading1 = React.createElement(
    "h1",
    {
        id: "title",
        className: "header_tag",
        style: {
            color: "red",
        },
    },
    "heading 1"
);

const heading2 = React.createElement("h2", {}, "heading 2");
const container = React.createElement("div", {
    className:"container"
}, [heading1, heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);