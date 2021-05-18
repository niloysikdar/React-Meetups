import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

const NewMeetupForm = () => {
  const titleInputRef = useRef();
  const addressInputRef = useRef();
  const imageInputRef = useRef();
  const descriptionRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const meetupData = {
      title: titleInputRef.current.value,
      address: addressInputRef.current.value,
      image: imageInputRef.current.value,
      description: descriptionRef.current.value,
    };
    console.log(meetupData);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={onSubmit}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea
            id="description"
            rows="5"
            required
            ref={descriptionRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add New Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
