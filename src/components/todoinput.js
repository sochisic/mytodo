import React from "react";
import PropTypes from "prop-types";
import AddIcon from "@material-ui/icons/Add";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ArrowDown from "@material-ui/icons/KeyboardArrowDownSharp";
import CheckCircleOutline from "@material-ui/icons/CheckCircleOutline";
import Checkbox from "@material-ui/core/Checkbox";

const styles = theme => ({
  paper: {
    display: "flex",
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    // width: 400,
    width: 400,
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto"
  },
  container: {
    // flex: 1
    // display: "flex",
    // flexDirection: "row",
    // flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 250
  },
  icon: {
    width: 40,
    height: 40
  },
  button: {
    margin: 10
  }
});

const TodoInput = ({ classes, onSubmit, handleChange, value }) => {
  return (
    <Paper className={classes.paper} elevation={1}>
      <FormControlLabel
        style={{ marginLeft: 1 }}
        control={
          <Checkbox
            icon={
              <ArrowDown
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
          // margin="normal"
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

TodoInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default withStyles(styles)(TodoInput);
