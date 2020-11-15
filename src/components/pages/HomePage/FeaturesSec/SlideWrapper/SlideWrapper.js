import React from "react";
import PropTypes from "prop-types";
import { slideWrapper, bgFigure } from "./SlideWrapper.module.scss"


function SlideWrapper({ children }) {
   return (
      <div className={slideWrapper}>
         <div className="container">
            {/* <div className={`${slideRow} row`}> */}
            <div className="row">
               {children}
            </div>
         </div>
         <div className={bgFigure}></div>
      </div>
   );
}


SlideWrapper.propTypes = {
   children: PropTypes.node,
};


export default SlideWrapper;