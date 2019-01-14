import React, { Component } from "react";
import styled from "styled-components";
import DeleteAction from "./DeleteAction";


const ToDoItemStyle = styled.li`
    list-style: none;
    font-size: 16px;
    margin-bottom: 15px;
    text-align: left;
    background: #049372;
    color: #fff;
    padding: 10px 15px;
    border-radius: 5px;
`;

const ActionsList = styled.ul `
    float: right
`
const ActionsListItem = styled.li`
    display: inline-block;
    margin: 0 5px;
`

class ToDoItem extends Component {

    state = {
        toDoItems: []
    };
    
    componentDidMount() {
        fetch("http://localhost:3000/todos")
          .then(res => res.json())
          .then(res => {
            this.setState({
                toDoItems: res
            });
        });
    }

    render() {
    const { items, removeItem } = this.props;
    
    return (
      <div>
        <ToDoItemStyle onClick={removeItem}>{items} 
            <ActionsList>
                <ActionsListItem>
                    <DeleteAction/>
                </ActionsListItem>
            </ActionsList>
        </ToDoItemStyle>
      </div>
    );
  }
}

export default ToDoItem;
