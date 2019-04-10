import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

import Button from "../components/Button";
import ToDoItem from "../components/ToDoItem";
import InputField from "../components/InputField";

const ToDoListStyle = styled.ul`
  border-top: 1px solid #ddd;
  padding-top: 30px;
  margin-top: 30px;
`;

class ToDoList extends Component {
  state = {
    toDoItems: [],
    loading: true,
    query: ""
  };

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      query: value
    });
  };

  componentDidMount() {
    fetch("http://localhost:3000/todos")
      .then(res => res.json())
      .then(res => {
        this.setState({
          toDoItems: res,
          loading: false
        });
      });
  }

  removeItem = (itemID) => () => {
    const newList = this.state.toDoItems.filter(item => item.id !== itemID);
    this.setState({
      toDoItems: newList
    })
    fetch('http://localhost:3000/todos/' + itemID, {
      method: 'DELETE'
    })
  }

  render() {
    const { query, loading, toDoItems } = this.state;

    let filteredToDos = toDoItems.filter(
      item => item.title.toLowerCase().indexOf(query) !== -1
    );
    const { query, loading } = this.state;

    return (
      <div>
        <Link to="/">
          <Button text="Add More Items" />
        </Link>
        <InputField type="text" query={query} placeholder="Search ..." value={query} onchange={this.handleInputChange} onblur={this.handleInputChange} />
        <ToDoListStyle>
          {filteredToDos.map((item, index) => (
            <ToDoItem key={index} items={item.title} removeItem={this.removeItem(item.id)} />
          ))}
        </ToDoListStyle>
        {loading && <div>Loading ...</div>}
      </div>
    );
  }
}

export default ToDoList;
