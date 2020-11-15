import React from "react";
import { ReactComponent as LogoBookmark } from "assets/logos/logo-bookmark.svg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { headerLogo } from "./Logo.module.scss";


function Logo({ header }) {
   return (
      <Link
         className={header ? headerLogo : null}
         to="/">
         <LogoBookmark />
      </Link>
   );
}


Logo.propTypes = {
   header: PropTypes.bool,
};


export default Logo;