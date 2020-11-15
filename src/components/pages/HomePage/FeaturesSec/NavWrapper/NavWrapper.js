import React from "react";
import PropTypes from "prop-types";
import { navWrapper } from "./NavWrapper.module.scss";


function NavWrapper({ children }) {
   return (
      <ul className={navWrapper}>
         {children}
      </ul>
   );
}


NavWrapper.propTypes = {
   children: PropTypes.node.isRequired
};

export default NavWrapper;