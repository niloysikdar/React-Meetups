import { useState } from "react";
import classes from "./MobileNavigation.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import FavouritesContext from "../store/favourites-context";

const MobileNavigation = () => {
  const favouriteCtx = useContext(FavouritesContext);

  const [toggle, setToggle] = useState("");
  function handleToggle() {
    if (toggle === "") {
      setToggle(classes.checked);
    } else {
      setToggle("");
    }
  }
  return (
    <>
      <button className={classes.menu_button} onClick={handleToggle}>
        <span className={classes.hamburger}>
          <span
            className={`${classes.hamburger_inner} ${classes.first} ${toggle}`}
          ></span>
          <span
            className={`${classes.hamburger_inner} ${classes.second} ${toggle}`}
          ></span>
        </span>
      </button>

      <div className={`${classes.mobile_navigation} ${toggle}`}>
        <Link className={classes.mobile_link} onClick={handleToggle} to="/">
          All Meetups
        </Link>
        <Link
          className={classes.mobile_link}
          onClick={handleToggle}
          to="/new-meetup"
        >
          New Meetup
        </Link>
        <Link
          className={classes.mobile_link}
          onClick={handleToggle}
          to="/favourites"
        >
          Favourites
          <span className={classes.mobile_badge}>
            {favouriteCtx.totalfavourites}
          </span>
        </Link>
      </div>
    </>
  );
};

export default MobileNavigation;
