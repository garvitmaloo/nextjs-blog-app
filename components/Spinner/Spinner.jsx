import React from "react";

import classes from "./spinner.module.css";

const Spinner = () => {
  return (
    <div className={classes.spinner}>
      <div className={classes["lds-ring"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h2>Loading...</h2>
    </div>
  );
};

export default Spinner;
