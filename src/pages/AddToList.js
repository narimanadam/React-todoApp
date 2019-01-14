import React, { Component } from "react";
import { navigate } from "@reach/router";
import styled from "styled-components";

import AddField from "../AddField";
import Button from "../Button";

const MainHeading = styled.h2`
  font-size: 30px;
  color: #049372;
  margin-bottom: 40px;
  text-align: center;
`;

class AddToList extends Component {
    state = {
        addItem: ""
    };

  
    getInputValue = (event) => {
        this.setState({
            addItem: event.target.value
        })   
    }

    addItemToList = () => {
        fetch('http://localhost:3000/todos', {
            method: 'POST',
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify({
                title: this.state.addItem
            })
        }).then(function (data) {  
            console.log('Request success: ', data);  
            navigate(`/list`)
        })  
        .catch(function (error) {  
            console.log('Request failure: ', error);  
        });
    }


  render() {
    const { addItem } = this.state;
    return (
      <div>
        <MainHeading>What is your main focus for today?</MainHeading>
        <AddField getInputValue={this.getInputValue} />
        <Button
            addItem={this.addItemToList}
            text="Add to List"
            disabled={addItem === ''? true : false}
        />
      </div>
    );
  }
}

export default AddToList;
