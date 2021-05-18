import MeetupList from "../components/meetups/MeetupList";
import classes from "./AllMeetups.module.css";
import { useState } from "react";
import { useEffect } from "react";

const AllMeetupsPage = () => {
  const [isLoading, setLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  const fetchData = () => {
    setLoading(true);
    fetch(
      "https://react-meetups-1eff3-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        console.log(meetups);
        setLoadedMeetups(meetups);
        setLoading(false);
      });
  };

  useEffect(fetchData, []);

  return (
    <div className={classes.allmeetups}>
      <h1>All Meetups</h1>
      {!isLoading ? <MeetupList meetups={loadedMeetups} /> : <p>Loading...</p>}
    </div>
  );
};

export default AllMeetupsPage;
