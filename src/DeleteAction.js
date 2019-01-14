import React, {Component} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ActionsButton = styled.button`
    background: #003171
    border: none;
    color: #fff;
    padding: 0 10px 3px;
    border-radius: 3px;
    font-size: 16px;
`

class DeleteAction extends Component {
    render () {
        return(
            <ActionsButton onClick={this.props.onclick}>
                <FontAwesomeIcon icon="trash-alt" color="#fff" size="xs" />
            </ActionsButton>
        )
    }
}

export default DeleteAction;