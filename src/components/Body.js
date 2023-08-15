import { restrauntlist } from "../constant";
import RestrauntCard from "./RestraurantCard";
import { useState } from "react";


const filterData = (searchText,restaurant)=>{
  // const arr = restaurant.filter((res) => res.data.name.includes(searchText));
  // return arr;
  // alternate code for filter 
  if(searchText==="")
    return restaurant;
  else
    return restaurant.filter((res) => res.data.name.includes(searchText));

}

const Body = () => {
  // SearchText is local state variable and
  const [searchText, setSearchText] = useState(""); // useState to create state variable
  // useState return array -> the first element of the array is state variable and
  // the second element is function that changes the state variable
  // good convention to write setVaraiblename
  // react one way data binding

  const [searchClicked, setSearchClicked] = useState("false");
  



  const [restraurant,setRestraurant] = useState(restrauntlist);
  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="search-btn"
          onClick={() => { 
            const ans = filterData(searchText,restraurant);
            setRestraurant(ans);
          }}
        >
          Search
        </button>
      </div>
      <div className="restraurant-list">
        {/* <RestrauntCard name = {restrauntlist[0].data.name}
          cloudinaryImageId = {restrauntlist[0].data.cloudinaryImageId}
          cuisines = {restrauntlist[0].data.cuisines}/> */}
        {/* <RestrauntCard {...restrauntlist[0].data}/>
          <RestrauntCard {...restrauntlist[1].data}/>
          <RestrauntCard {...restrauntlist[5].data}/> */}
        {restraurant.map((restaurant) => {
          return (
            <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
