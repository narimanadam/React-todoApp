import React, { Component } from "react";
import ReactDOM from "react-dom";
import ToDoList from "./pages/ToDoList";
import { Router } from "@reach/router";
import AddToList from "./pages/AddToList";
import { library } from '@fortawesome/fontawesome-svg-core';

import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import GlobalStyle from "./styles.js";

library.add(faTrashAlt);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <ToDoList path="/list" />
          <AddToList path="/" />
        </Router>
        <GlobalStyle />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
