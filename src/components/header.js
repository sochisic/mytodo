import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

const Styles = {
  title: {
    fontSize: 100,
    color: red.A100
  }
};

const Header = ({ classes }) => {
  return (
    <div>
      <Typography
        gutterBottom
        colorInherit
        className={classes.title}
        variant="title"
      >
        TODOS
      </Typography>
    </div>
  );
};

export default withStyles(Styles)(Header);
