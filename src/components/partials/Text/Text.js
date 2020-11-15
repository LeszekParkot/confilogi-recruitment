import React from "react";
import PropTopes from "prop-types";
import { text } from "./Text.module.scss";


function Text({ children }) {
   return (
      <p className={text}>
         {children}
      </p>
   );
}


Text.propTypes = {
   children: PropTopes.string.isRequired
}


export default Text;