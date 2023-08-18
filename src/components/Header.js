import { useState } from "react";

export const Title = () => (
    <a href="/">
  <img className="logo" alt = "logo" src="https://i.pinimg.com/474x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg"/>
  </a>
);

const loggedUser = (authenticate) =>{
  // API call to make authentication
  return authenticate;
}

// Composing Component 
export const Header = () => {

  const [title,setTitle] = useState("Food Villa");
  const [authenticate,setAuthenticate] = useState(true);
  return (
    <div className="header">
      <Title/>
      <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>

        </ul>
      </div>
      
      {
        // javascript statement and expression both are different 
        // javascript statement ex : 
        //let a = 10;
        //console.log(a);

        // only single single line is know as expression ex :
        //((a=10),console.log(a))

        (loggedUser(authenticate)? <button onClick={()=>{setAuthenticate(!authenticate)}}>Logout</button> : <button onClick={()=>{ setAuthenticate(!authenticate)}}>Login</button>)
      }
    </div>
  );
};

// export default Header;