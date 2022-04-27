import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import { useSelector } from "react-redux";

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Community Soundboard</h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}
        {/* If a user is logged in, but hasn't been given soundboard_access */}
        {user.id && !user.soundboard_access && user.access < 2 && (
          <Link className="navLink" to="/requestaccess">
            Request Access
          </Link>
        )}
        {/* If user is a moderator or admin, show link to new user soundboard requests. */}
        {user.id && user.access > 2 && (
          <Link className="navLink" to="/manageaccess">
            Manage Access
          </Link>
        )}
        {/* If user is a moderator or admin, show link to "deleted" soundclips. */}
        {user.id && user.access > 2 && (
          <Link className="navLink" to="/deletedsoundboard">
            Deleted Soundboard
          </Link>
        )}
        {/* If a user is logged in, show these links */}
        {user.id && (
          <>

            <Link className="navLink" to="/soundboard">
              Soundboard
            </Link>

            <LogOutButton className="navLinkLogout" />
          </>
        )}
      </div>
    </div>
  );
}

export default Nav;
