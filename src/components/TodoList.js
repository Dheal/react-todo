import React from "react";
import { useSelector, connect } from "react-redux";

const TodoList = (props) => {
  //   const todos = useSelector((state) => state.todo.todos);

  return (
    <div>
      <h5>My Todo :</h5>
      <ul>
        {props.todos.map((todoItem, index) => {
          return <li key={index}>{todoItem.name}</li>;
        })}
      </ul>
    </div>
  );
};

//connect menerima 2 parameter, 1: state, 2: action

const mapStateToProps = (state) => {
  return {
    todos: state.todo.todos,
  };
};

export default connect(mapStateToProps)(TodoList);
