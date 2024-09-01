import { useEffect, useState } from "react";
import { RestaurentMenuURL } from "@/constants";
export async function getResInfo(resId) {
  const data = await fetch(RestaurentMenuURL + resId);
  const json = await data.json();
  console.log(json);
  return json;
}

function getItemCards(restaurentInfo) {
  console.log(restaurentInfo);
  const cardsAdress =
    restaurentInfo.data?.cards.filter((c) => c.groupedCard) || [];
  console.log(cardsAdress);
  const cardsLocated =
    cardsAdress[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
  console.log(cardsLocated);
  const ItemCategoryCards =
    cardsLocated
      .filter(
        (card) =>
          card.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
      .map((card) => [...card.card.card.itemCards])
      .flat(Infinity) || [];

  const menuItemsCards = ItemCategoryCards.map((c) => [c.card.info]).flat(
    Infinity
  );
  console.log(menuItemsCards);

  return menuItemsCards;
}


export function useRestaurantMenu(id) {

  const [restaurentInfo, setRestaurentInfo] = useState(null);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getResInfo(id).then((data) => {
      setRestaurentInfo(data);
      setRestaurants(getItemCards(data));
    });
  }, [id]);

  const { info } =
  restaurentInfo?.data?.cards[2]?.card?.card || {};

  return [info,restaurants];
}






