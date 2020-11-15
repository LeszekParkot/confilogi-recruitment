import React from "react";
import PropTypes from "prop-types";
import { answer } from "./Answer.module.scss";


function Answer({ children, id, active }) {
   if (id === active) {
      return (
         <p className={answer}>
            {children}
         </p>
      );
   } else {
      return null;
   }
}

Answer.propTypes = {
   children: PropTypes.node.isRequired,
   id: PropTypes.number.isRequired,
   active: PropTypes.number.isRequired,
};

export default Answer;