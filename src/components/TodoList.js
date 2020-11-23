import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";

const TodoList = (props) => {
  const [checked, setChecked] = React.useState(false);

  const todos = useSelector((state) => state.todo.todos);

  const dispatch = useDispatch();

  const hapus = (index) => {
    dispatch({ type: "DEL_TODO", payload: index });
  };
  return (
    <div>
      <h5>My Todo :</h5>
      <ul style={{listStyleType: "none"}}>
        {todos.map((todoItem, index) => {
          console.log(todos);
          return (
            <li key={index} >
              <input
              style={{margin:"5px"}}
                type="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
              {todoItem.name}
              <Button
                onClick={() => hapus(index)}
                variant="danger"
                style={{ margin: "5px" }}
              >
                Hapus
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

//connect menerima 2 parameter, 1: state, 2: action

// const mapStateToProps = (state) => {
//   return {
//     todos: state.todo.todos,
//   };

// };

// export default connect(mapStateToProps)(TodoList);
export default TodoList;
