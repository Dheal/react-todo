import React from "react";
import FormInputTodo from "../components/FormInputTodo";
import TodoList from "../components/TodoList"

const Home = () => {
  return (
    <>
      <h1>Todo List</h1>
      <hr></hr>
      <FormInputTodo />
      <TodoList />
    </>
  );
};

export default Home;
