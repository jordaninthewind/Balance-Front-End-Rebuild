import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

const TimeSelect = ({ duration, updateMeditationTime }) => {
  return (
    <>
      {!duration && (
        <InputLabel id="time-select">
          How long do you want to sit today?
        </InputLabel>
      )}
      <FormControl>
        <Select labelId="time-select" onChange={updateMeditationTime}>
          <MenuItem value={duration}>Select A Time</MenuItem>
          {[5, 10, 15, 20, 25, 30, 45, 60].map((num) => {
            return <MenuItem value={num * 60}>{num} Minutes</MenuItem>;
          })}
        </Select>
      </FormControl>
    </>
  );
};

export default TimeSelect;
