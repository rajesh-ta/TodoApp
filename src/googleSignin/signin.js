import React, { useEffect, useState } from "react";
import firebase from "./config";
import { signInWithGoogle } from "./config";

import Home from "./Home";

import classes from "./signin.module.css";

const SignIn = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  console.log(user);

  return (
    <div className={classes.container}>
      <div className={classes["app-wrapper"]}>
        {user ? (
          <Home user={user} />
        ) : (
          <div>
            <div className={classes.header}>
              <h1>ToDo List</h1>
            </div>
            <div className={classes["login-div"]}>
              <button
                onClick={signInWithGoogle}
                className={classes["button-login"]}
              >
                Signin with Google
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignIn;
