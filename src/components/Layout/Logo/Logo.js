import React from "react";
import { ReactComponent as LogoBookmark } from "assets/logos/logo-bookmark.svg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { filled } from "./Logo.module.scss";


function Logo({ open }) {
   return (
      <Link to="/">
         <LogoBookmark className={open ? filled : null} />
      </Link>
   );
}


Logo.propTypes = {
   header: PropTypes.bool,
};


export default Logo;