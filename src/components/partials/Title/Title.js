import React from "react";
import PropTypes from "prop-types";
import { titlePrim, titleSec } from "./Title.module.scss";


function Title({ primary, children }) {

   if (primary) {
      return (
         <h1 className={titlePrim}>
            {children}
         </h1>
      );
   } else {
      return (
         <h2 className={titleSec}>
            {children}
         </h2>
      );
   }

}


Title.propTypes = {
   primary: PropTypes.bool,
   children: PropTypes.string.isRequired
}


export default Title;