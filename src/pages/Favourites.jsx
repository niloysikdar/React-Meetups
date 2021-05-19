import { useContext } from "react";
import FavouritesContext from "../store/favourites-context";
import MeetupList from "../components/meetups/MeetupList";

const FavouritesPage = () => {
  const style = {
    textAlign: "center",
  };
  const favouriteCtx = useContext(FavouritesContext);

  return (
    <div>
      <h1 style={style}>Favourites</h1>
      {favouriteCtx.totalfavourites !== 0 ? (
        <MeetupList meetups={favouriteCtx.favourites.reverse()} />
      ) : (
        <p style={style}>No favourites !</p>
      )}
    </div>
  );
};

export default FavouritesPage;
