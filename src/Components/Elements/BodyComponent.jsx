import RestaurentCard from "./RestaurentCard";
import "../Styles/BodyComponent.css";
//import restaurants from "../../data/RestaurentList.json"
import { Button } from "@/Components/ui/button";
import ShimmerUI from "./ShimmerUI";
import { useState, useEffect } from "react";
import { RestaurentListURL } from "@/constants";

function filterList(Resturants, searchInput) {
  const list = Resturants.filter((restaurant) => {
    return restaurant.info.name
      .toLowerCase()
      .includes(searchInput.toLowerCase());
  });
  return list;
}
function getItemCards(restaurentlist) {
  console.log(restaurentlist);
  const RestaurentCards =
    restaurentlist.data?.cards
      .filter(
        (c) =>
          c.card?.card["@type"] ===
          "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget"
      )
      .map((cc) => cc.card.card.gridElements.infoWithStyle.restaurants ?? [])
      .flat(Infinity) || [];
  console.log(RestaurentCards);

  return RestaurentCards;
}
async function getRestaurents(setResturants, setFilteredResturants) {
  const data = await fetch(RestaurentListURL);
  const json = await data.json();
  const restaurentcards = getItemCards(json);
  console.log(restaurentcards);
  console.log("called api");
  setResturants(restaurentcards);
  setFilteredResturants(restaurentcards);
}

export default function BodyComponent() {
  const [Resturants, setResturants] = useState([]);
  const [filteredResturants, setFilteredResturants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

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
              setFilteredResturants(filterList(Resturants, searchInput));
            }}
          >
            Search
          </Button>
          {/* {console.log(restaurants)} */}
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
