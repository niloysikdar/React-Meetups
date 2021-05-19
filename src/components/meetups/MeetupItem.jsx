import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { useContext } from "react";
import FavouritesContext from "../../store/favourites-context";

const MeetupItem = ({ meetup }) => {
  const favouriteCtx = useContext(FavouritesContext);
  const isItemFavourite = favouriteCtx.isItemFavourite(meetup.id);

  const toggleFavourite = () => {
    if (isItemFavourite) {
      favouriteCtx.removeFavourite(meetup.id);
      console.log("Item has been removed");
    } else {
      favouriteCtx.addFavourite({
        id: meetup.id,
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
      });
      console.log("Item has been added");
    }
  };

  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={meetup.image} alt={meetup.title} />
        </div>
        <div className={classes.content}>
          <h3>{meetup.title}</h3>
          <address>{meetup.address}</address>
          <p>{meetup.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavourite}>
            {isItemFavourite ? "Remove from Fav" : "Add to Fav"}
          </button>
        </div>
      </li>
    </Card>
  );
};

export default MeetupItem;
