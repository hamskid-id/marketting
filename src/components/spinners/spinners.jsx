import React from "react";
import { useState } from "react";
import HashLoader from "react-spinners/HashLoader";
import classes from "./spinner.module.css";
const Spinner = () => {
    let [color] = useState("#9563FF");

    return (
        <div className={classes.spinner_container}>
            <HashLoader
                color={color}
                size={25}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
};

export default Spinner;