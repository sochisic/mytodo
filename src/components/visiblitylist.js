import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";


const styles = theme => ({
  paper: {
    display: "flex",
    flexDirection: "row",
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    width: 400,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10
  },
  button: {
    // margin: theme.spacing.unit
  }
});

const VisiblityList = ({ classes, visiblityFilter }) => {
  return (
    <div>
      <Paper className={classes.paper}>
        <Typography>1 item left</Typography>
        <Button
          variant={visiblityFilter === "ALL" ? "outlined" : ""}
          filter="SHOW ALL"
          className={classes.button}
          style={{
            marginLeft: "auto"
          }}
        >
          All
        </Button>
        <Button
          variant={visiblityFilter === "ACTIVE" ? "outlined" : ""}
          className={classes.button}
          filter="SHOW_ACTIVE"
        >
          Active
        </Button>
        <Button
          variant={visiblityFilter === "COMPLETED" ? "outlined" : ""}
          className={classes.button}
          filter="SHOW_COMPLETED"
        >
          Completed
        </Button>
      </Paper>
    </div>
  );
};

VisiblityList.propTypes = {};

export default withStyles(styles)(VisiblityList);
