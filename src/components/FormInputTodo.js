import React, { useState } from "react";
import { useDispatch, connect } from "react-redux";

const FormInputTodo = (props) => {
  //   const dispatch = useDispatch();
  //   console.log(props.addTodo);

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch({ type: "ADD_TODO", payload: { name: todo, status: false } });
    props.addTodo(todo);
    setTodo("");
  };

  const [todo, setTodo] = useState("");

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="New Todo"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <input type="submit" value="save todo" />
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) =>
      dispatch({
        type: "ADD_TODO",
        payload: {
          name: todo,
          status: false,
        },
      }),
  };
};

export default connect(null, mapDispatchToProps)(FormInputTodo);
