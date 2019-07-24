import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import ExercisesEdit from "./components/exercises-edit.component";
import ExercisesCreate from "./components/exercises-create.component";
import UserCreate from "./components/user-create.component";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" exact component={ExercisesEdit} />
      <Route path="/create" exact component={ExercisesCreate} />
      <Route path="/user" exact component={UserCreate} />
    </Router>

  );
}

export default App;
