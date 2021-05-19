import { createContext, useState } from "react";

const FavouritesContext = createContext({
  favourites: [],
  totalfavourites: 0,
  addFavourite: (favouriteMetup) => {},
  removeFavourite: (meetupId) => {},
  isItemFavourite: (meetupId) => {},
});

export const FavouritesContextProvider = (props) => {
  const [favouriteMetups, updateFavourite] = useState([]);

  const addFavouritehandler = (favouriteMetup) => {
    updateFavourite((prevFavourite) => {
      return prevFavourite.concat(favouriteMetup);
    });
  };

  const removeFavouriteHandler = (meetupId) => {
    updateFavourite((prevFavourite) => {
      return prevFavourite.filter((meetup) => meetup.id !== meetupId);
    });
  };

  const isItemFavouritehandler = (meetupId) => {
    return favouriteMetups.some((meetup) => meetup.id === meetupId);
  };

  const context = {
    favourites: favouriteMetups,
    totalfavourites: favouriteMetups.length,
    addFavourite: addFavouritehandler,
    removeFavourite: removeFavouriteHandler,
    isItemFavourite: isItemFavouritehandler,
  };

  return (
    <FavouritesContext.Provider value={context}>
      {props.children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesContext;
