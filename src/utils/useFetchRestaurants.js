import { RestaurentListURL } from "./constants";
 
export function getItemCards(restaurentlist) {
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
 export async function getRestaurents(setResturants, setFilteredResturants) {
    const data = await fetch(RestaurentListURL);
    const json = await data.json();
    const restaurentcards = getItemCards(json);
    console.log(restaurentcards);
    console.log("called api");
    setResturants(restaurentcards);
    setFilteredResturants(restaurentcards);
  }

