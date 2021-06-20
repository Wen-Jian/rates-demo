import React from "react";
import headerStyle from "../../styles/header.module.scss";
const Header = () => {
  return (
    <div className={headerStyle.header_container}>
      <div className={headerStyle.logo}>Rates List</div>
    </div>
  );
};

export default Header;
