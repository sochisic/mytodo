import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

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
  }
});

const TodoItem = ({ classes, todos }) => {
  return (
    <div>
      {todos.map((item, index) => (
        <Paper
          key={index}
          className={classes.paper}
          style={{ marginTop: 10, marginBottom: 10 }}
        >
          <Typography variant="headline" component="h3">
            {item}
          </Typography>
        </Paper>
      ))}
    </div>
  );
};

TodoItem.propTypes = {};

export default withStyles(styles)(TodoItem);
