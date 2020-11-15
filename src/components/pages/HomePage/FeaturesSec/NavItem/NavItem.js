import React from "react";
import PropTypes from "prop-types";
import { navItem, navItemActive, navBtn, emVisible, emInvisible } from "./NavItem.module.scss";


function NavItem({ activeSlide, slideId, setSlide, children }) {

   const isActive = (activeSlide === slideId);

   return (
      <li className={isActive ? navItemActive : navItem}>
         <button
            className={navBtn}
            type="button"
            onClick={setSlide}
            value={slideId}>
            {children}
         </button>
         <div className={isActive ? emVisible : emInvisible}></div>
      </li>
   );
}


NavItem.propTypes = {
   setSlide: PropTypes.func.isRequired,
   slideId: PropTypes.number.isRequired,
   activeSlide: PropTypes.number.isRequired,
   children: PropTypes.node,
};

export default NavItem;