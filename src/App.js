import React from "react";
import ReactDOM from "react-dom/client";
// default import 
// import Header from './components/Header';
// Name import 
import  {Title,Header}  from "./components/Header";
import Body from './components/Body';
import Footer from "./components/Footer";
import { IMG_CDN_URL } from "./constant";


const AppLayout = () => { 
  return (
    <React.Fragment>
       
        <Header/>
        <Body/>
        <Footer/>
    </React.Fragment>
  )
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

// babel-plugin-transform-remove-console












const jsx = (
  <div style={{backgroundColor:"yellow"}}>
    <h1>JSX</h1>
    <h1>Second JSX</h1>
  </div>
)