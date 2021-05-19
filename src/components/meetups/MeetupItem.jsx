import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { useContext } from "react";
import FavouritesContext from "../../store/favourites-context";
import swal from "sweetalert";

const MeetupItem = ({ meetup }) => {
  const favouriteCtx = useContext(FavouritesContext);
  const isItemFavourite = favouriteCtx.isItemFavourite(meetup.id);

  const toggleFavourite = () => {
    if (isItemFavourite) {
      swal({
        title: "Are you sure?",
        text: "Do you want to remove it from favourites ?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          favouriteCtx.removeFavourite(meetup.id);
          console.log(`"${meetup.title}" has been removed`);
          swal("Item has been removed!", {
            icon: "success",
          });
        } else {
          swal("Not removed from Favourites");
        }
      });
    } else {
      favouriteCtx.addFavourite({
        id: meetup.id,
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
      });
      console.log(`"${meetup.title}" has been added`);
      swal({
        title: "Hooray",
        text: "Item has been added to favourites",
        icon: "success",
      });
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
