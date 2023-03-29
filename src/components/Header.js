import React from "react";
import classes from "./Header.module.css";

const Header = ({ user }) => {
  return (
    <div className={classes.header}>
      <div className={classes.welcome}>
        <h4>Welcome</h4>
        <h4>{user.displayName}</h4>
      </div>
      <h1>ToDo List</h1>
    </div>
  );
};

export default Header;
