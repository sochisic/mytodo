import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CircleOutline from "@material-ui/icons/RadioButtonUnchecked";
import CheckCircleOutline from "@material-ui/icons/CheckCircleOutline";
import Checkbox from "@material-ui/core/Checkbox";


import React from 'react';
import PropTypes from 'prop-types';

const todo = ({ onTodoClick, classes, key }) => {
  return (
    <Paper
      key={key}
      className={classes.paper}
      style={{ marginTop: 10, marginBottom: 10 }}
    >
      <FormControlLabel
        style={{ marginLeft: 'auto', justifySelf: "" }}
        control={
          <Checkbox
            onClick={onTodoClick}
            icon={
              <CircleOutline
                classes={{
                  root: classes.icon
                }}
              />
            }
            checkedIcon={
              <CheckCircleOutline
                classes={{
                  root: classes.icon
                }}
              />
            }
            value="checkedH"
          />
        }
      />
      <Typography
        variant="headline"
        component="h3"
        style={{
          textDecoration: item.completed ? "line-through" : "none",
          width: 280,
          textAlign: "center"
        }}
        onClick={onTodoClick}
      >
        {item.value}
      </Typography>
      <Button
        variant=""
        mini
        color="secondary"
        aria-label="Add"
        className={classes.button}
      >
        <CloseOutline />
      </Button>
    </Paper>
  );
};

todo.propTypes = {

};

export default todo;



