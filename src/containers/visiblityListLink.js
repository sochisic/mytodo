
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import VisiblityList from '../components/visiblitylist';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visiblityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisiblityListLink = connect(
  mapStateToProps,
  mapDispatchToProps,
)(VisiblityList);

export default VisiblityListLink;
