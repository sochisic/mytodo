import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import { Grid } from "../node_modules/@material-ui/core";
import Header from "./components/header";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
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
  },
  button: {}
});

class App extends Component {
  state = {
    value: "",
    todos: []
  };

  handleChange = e => this.setState({ value: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    if (!this.state.value) return;
    // console.log(this.state.todos);
    this.setState({
      value: "",
      todos: [...this.state.todos, this.state.value]
    });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    console.log(this.state.todos);

    return (
      <div className={classes.root}>
        <Header />
        <Paper className={classes.paper} elevation={1}>
          <form
            className={classes.container}
            noValidate
            autoComplete="off"
            onSubmit={this.onSubmit}
          >
            <TextField
              id="with-placeholder"
              label="My ToDo!"
              placeholder="Add your todo"
              className={classes.textField}
              margin="normal"
              value={value}
              onChange={this.handleChange}
            />
          </form>
          <Button
            variant="fab"
            mini
            color="secondary"
            aria-label="Add"
            className={classes.button}
            onClick={this.onSubmit}
            disabled={!this.state.value}
          >
            <AddIcon />
          </Button>
        </Paper>
        {this.state.todos.map((item, index) => (
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
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
