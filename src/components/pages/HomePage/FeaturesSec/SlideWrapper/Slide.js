import React from "react";
import PropTypes from "prop-types";


function Slide({ children, id, currentSlide }) {
   if (id === currentSlide) {
      return (
         <>
            {children}
         </>
      );
   } else {
      return null;
   }
}


Slide.propTypes = {
   children: PropTypes.node.isRequired,
   id: PropTypes.number.isRequired,
   currentSlide: PropTypes.number.isRequired,
};


export default Slide;