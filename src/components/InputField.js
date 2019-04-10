import React from "react";

import InputStyle from "../styles/InputStyled";

const InputField = ({ onchange, onblur, type, placeholder, value }) => {
    return (
        <form>
            <InputStyle
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onchange}
                onBlur={onblur}
            />
        </form>
    );
}

export default InputField;
