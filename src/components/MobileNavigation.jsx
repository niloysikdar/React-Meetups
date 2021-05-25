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

      <nav className={`${classes.mobile_navigation} ${toggle}`}>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetup</Link>
          </li>
          <li>
            <Link to="/favourites">
              Favourites
              <span className={classes.badge}>
                {favouriteCtx.totalfavourites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MobileNavigation;
