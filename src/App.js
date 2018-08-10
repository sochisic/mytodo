import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "../node_modules/@material-ui/core";
import Header from "./components/header";
import TodoInput from "./components/todoinput";
import TodoItemList from "./components/todoitemlist";
import VisiblityListLink from "./containers/visiblityListLink";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
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
    todos: [],
    completed: false
  };

  handleChange = e => this.setState({ value: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    if (!this.state.value) return;
    // console.log(this.state.todos);
    this.setState({
      value: "",
      todos: [
        ...this.state.todos,
        { value: this.state.value, completed: false }
      ]
    });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    console.log(this.state.todos);

    return (
      <div className={classes.root}>
        <Header />
        <TodoInput
          onSubmit={this.onSubmit}
          handleChange={this.handleChange}
          value={this.state.value}
        />
        <VisiblityListLink />
        <TodoItemList todos={this.state.todos} />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
