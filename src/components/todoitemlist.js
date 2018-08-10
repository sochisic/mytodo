import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Todo from "./todo";


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
  icon: {
    width: 40,
    height: 40
  },
  button: {
    width: 40,
    height: 40,
    marginLeft: 'auto'
  }
});

const TodoItemList = ({ onTodoClick, todos }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
        />
      ))}
    </div>
  );
};

TodoItemList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default withStyles(styles)(TodoItemList);
