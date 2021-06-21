import React, { useState, useEffect } from "react";
import styled from "styled-components";

import logoE from "../assets/elmLogoE.png";
import logoElm from "../assets/elmLogo.png";

const Menu = styled.aside`
  min-height: 100vh;
  height: 100vh;
  min-width: 5rem;
  width: 10%;
  background-color: var(--gray-dark);
`;

const Logo = styled.img`
  margin: 1rem;
  height: 1.8rem;
`;

const Sidebar = () => {
  return (
    <Menu>
      <Logo src={logoE} />
    </Menu>
  );
};

export default Sidebar;
