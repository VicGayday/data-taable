import React from "react";
import classes from "./MySelect.module.css";

const MySelect = ({options, defaultValue, value, onChange}) => {
  return (
    <select
      className={classes.mySelect}
      value={value}
      onChange={event => onChange(event.target.value)}
      >
      <option disabled value="">{defaultValue}</option>
      {options.map(it =>
        <option key={it.value} value={it.value}>
          {it.name}
        </option>
      )}
    </select>
  )
};

export default MySelect;
