import React, { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ButtonStyle } from '../styles/ButtonStyled';

const Button = ({ disabled, onclick, text, icon, color, size }) => (
  <Fragment>
    <ButtonStyle disabled={disabled} onClick={onclick} className={icon ? 'btn__icon' : ''}>{icon ? <FontAwesomeIcon icon={icon} color={color} size={size} /> : `${text}`}</ButtonStyle>
  </Fragment>
)

export default Button;
