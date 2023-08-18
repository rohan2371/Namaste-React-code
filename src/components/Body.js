import { restrauntlist } from "../constant";
import RestrauntCard from "./RestraurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const filterData = (searchText,restaurant) => {
  return restaurant.filter((res) => res?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
};



const Body = () => {
  // SearchText is local state variable and
  const [searchText, setSearchText] = useState(""); // useState to create state variable

  const [filterRestaurant,setFilterRestaurant] = useState([]);
  const [allRestaurants,setAllRestaurants] = useState([]);

  useEffect(() => {
    // API call
    getRestaurants(); 
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // Optional chaining
    
    setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
    setFilterRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info);
    

  }
  console.log("render");

  // not render component (Early return )
  if(!allRestaurants) return null;
  if(filterRestaurant.length === 0 && searchText!='') return <h1>no restaurant found </h1>;
  return (allRestaurants.length === 0)? (

  <Shimmer/>
  ) : (
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
            const ans = filterData(searchText,allRestaurants);
            setFilterRestaurant(ans); 
            if(filterRestaurant.length === 0)
              setNoRestaurants(true);         
          }}
        >
          Search
        </button>
      </div>
      <div className="restraurant-list">
        {filterRestaurant.map((restaurant,index) => {
          return (
            <RestrauntCard {...restaurant.info}  key={restaurant.info.id} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
