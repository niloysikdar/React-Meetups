import NewMeetupForm from "../components/meetups/NewMeetupForm";
import classes from "./NewMeetup.module.css";
import { useHistory } from "react-router-dom";

const NewMeetupPage = () => {
  const history = useHistory();

  const onAddMeetup = (meetupData) => {
    fetch(
      "https://react-meetups-1eff3-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  };
  return (
    <div className={classes.container}>
      <h2>Add New Meetup</h2>
      <NewMeetupForm onAddMeetup={onAddMeetup} />
    </div>
  );
};

export default NewMeetupPage;
