import React, { Component } from "react";
import styled from "styled-components";

import Button from "../components/Button";

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

const ActionsList = styled.ul`
    float: right
`
const ActionsListItem = styled.li`
    display: inline-block;
    margin: 0 5px;
`

class ToDoItem extends Component {

    render() {
        const { items, removeItem } = this.props;
        return (
            <div>
                <ToDoItemStyle>{items}
                    <ActionsList>
                        <ActionsListItem>
                            <Button icon="trash-alt" size="xs" color="#fff" onclick={removeItem} />
                        </ActionsListItem>
                    </ActionsList>
                </ToDoItemStyle>
            </div>
        );
    }
}

export default ToDoItem;
