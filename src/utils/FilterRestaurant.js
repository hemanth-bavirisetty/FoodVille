export default function filterList(Resturants, searchInput, setIsSearchResult) {
    const list = Resturants.filter((restaurant) => {
        setIsSearchResult(true)
      return restaurant.info.name
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    });
    return list;
  }