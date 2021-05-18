import NewMeetupForm from "../components/meetups/NewMeetupForm";
import classes from "./NewMeetup.module.css";

const NewMeetupPage = () => {
  return (
    <div className={classes.container}>
      <h2>Add New Meetup</h2>
      <NewMeetupForm />
    </div>
  );
};

export default NewMeetupPage;
