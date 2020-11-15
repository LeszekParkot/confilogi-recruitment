import React from "react";
import PropTopes from "prop-types";
import { buttonDark, buttonLight } from "./Button.module.scss";


function Button({ children, light }) {
   return (
      <button
         className={light ? buttonLight : buttonDark}
         type="button">
         {children}
      </button>
   );
}


Button.propTypes = {
   children: PropTopes.string,
   light: PropTopes.bool
}


export default Button;