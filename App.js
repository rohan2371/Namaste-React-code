

import React from 'react';
import  ReactDOM  from 'react-dom/client';


const Heading1 = ()=> (
<h1 id="title" key="h2">
    Namaste react
</h1>
)

const HeaderComponent1 = () => {
    return(
        <div>
        {/* <Heading1/> */}
        {Heading1()}
        <h1>hello react bosh </h1>
        </div>
    )
}

const HeaderComponent2 = () => <h2>HeaderComponent 2 is also works  </h2>


const HeaderComponent3 = () =>(
    <div>
        HeaderComponent 3 is also works fine 
    </div>
)

const HeaderComponent4 = function (){
    return(
    <>
        <h2>HeaderComponent 4 this is also works fine</h2>
    </>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent1/>);







// babel-plugin-transform-remove-console     