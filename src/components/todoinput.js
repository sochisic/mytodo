import React from "react";
import PropTypes from "prop-types";
import AddIcon from "@material-ui/icons/Add";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  paper: {
    display: "flex",
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: 400,
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto"
  },
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});

const TodoInput = ({ classes, onSubmit, handleChange, value }) => {
  return (
    <Paper className={classes.paper} elevation={1}>
      <form
        className={classes.container}
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <TextField
          id="with-placeholder"
          label="My ToDo!"
          placeholder="Add your todo"
          className={classes.textField}
          margin="normal"
          value={value}
          onChange={handleChange}
        />
      </form>
      <Button
        variant="fab"
        mini
        color="secondary"
        aria-label="Add"
        className={classes.button}
        onClick={onSubmit}
        disabled={!value}
      >
        <AddIcon />
      </Button>
    </Paper>
  );
};

TodoInput.propTypes = {};

export default withStyles(styles)(TodoInput);
