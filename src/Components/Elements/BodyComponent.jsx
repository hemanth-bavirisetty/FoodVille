import RestaurentCard from "./RestaurentCard";
import "../Styles/BodyComponent.css";
//import restaurants from "../../data/RestaurentList.json"
import { Button } from "@/Components/ui/button";
import ShimmerUI from "./ShimmerUI";
import { useState, useEffect } from "react";
import { getRestaurents } from "@/utils/useFetchRestaurants";
import filterList from "@/utils/FilterRestaurant";

export default function BodyComponent() {
  const [Resturants, setResturants] = useState([]);
  const [filteredResturants, setFilteredResturants] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isSearchResult, setIsSearchResult] = useState(false);

  useEffect(() => {
    getRestaurents(setResturants, setFilteredResturants);
  }, []);

  return (
    <>
      <div className="body">
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            className="rounded-2xl mx-3 h-11 "
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <Button
            className="rounded-3xl w-50 mx-1 h-11 "
            onClick={() => {
              setFilteredResturants(
                // setting data in FilteredResturants
                filterList(Resturants, searchInput, setIsSearchResult) //getting search results
              );
            }}
          >
            Search
          </Button>
          {/* {console.log(restaurants)} */}

          {isSearchResult && (
            <Button
              className="rounded-3xl w-50 mx-1 h-11 "
              onClick={() => {
                setIsSearchResult(false);
                setSearchInput("");
              }}
            >
              Back
            </Button>
          )}
        </div>
        {Resturants.length === 0 ? (
          <>
            <div className="Restaurents">
              {
                Array(5)
                  .fill()
                  .map((_, index) => (
                    <ShimmerUI key={index} />
                  )) /*render multiple shimmerui cards*/
              }
            </div>
          </>
        ) : !isSearchResult ? (
          <div className="Restaurents">
            {Resturants.map(function (restaurant, index) {
              return (
                <RestaurentCard
                  {...restaurant.info}
                  key={index}
                ></RestaurentCard>
              );
            })}
          </div>
        ) : (
          <div className="Restaurents">
            {filteredResturants.length === 0 ? (
              <h2>Oops! No Restuarants Matches your filter</h2>
            ) : (
              filteredResturants.map(function (restaurant, index) {
                return (
                  <RestaurentCard
                    {...restaurant.info}
                    key={index}
                  ></RestaurentCard>
                );
              })
            )}
          </div>
        )}
      </div>
    </>
  );
}
