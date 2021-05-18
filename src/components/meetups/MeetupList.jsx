import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";

const MeetupList = ({ meetups }) => {
  return (
    <ul className={classes.list}>
      {meetups.map((meetup) => {
        return <MeetupItem key={meetup.id} meetup={meetup} />;
      })}
    </ul>
  );
};

export default MeetupList;
