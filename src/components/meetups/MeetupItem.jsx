import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

const MeetupItem = ({ meetup }) => {
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
          <button>Add to Fav</button>
        </div>
      </li>
    </Card>
  );
};

export default MeetupItem;
