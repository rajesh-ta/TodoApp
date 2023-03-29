import React from "react";
import TodosListApp from "../components/TodosListApp";

const Home = ({ user }) => {
  return (
    <div>
      <TodosListApp user={user} />
    </div>
  );
};

export default Home;
