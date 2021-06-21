import React, { useState, useEffect } from "react";
import styled from "styled-components";

import logoE from "../assets/elmLogoE.png";
import logoElm from "../assets/elmLogo.png";
import { AiFillHome } from "react-icons/ai";

const optionsArray = [
  { name: "Overview", pages: ["Overview", "Rate of Sale", "Discounts"] },
  { name: "Amazon", pages: ["Overview", "Promotions"] },
  { name: "Co-Op", pages: ["Overview", "Promotions"] },
  { name: "Holland & Barrett", pages: [] },
  { name: "Morrisons", pages: [] },
];

const Menu = styled.nav`
  min-height: 100vh;
  height: 100%;
  min-width: 5rem;
  width: ${(props) => (props.open ? "40%" : "10%")};
  background-color: var(--gray-dark);
  color: white;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  transition: width, left, right, 0.3s;
  ul {
    list-style: none;
    padding: 0;
  }
`;

const Logo = styled.img`
  margin: 1rem;
  max-height: 1.8rem;
  max-width: 1.8rem;
`;

const SmallOption = styled.li`
  background-color: var(--gray);
  height: 1.5rem;
  width: 1.5rem;
  margin: 1rem;
  border-radius: 50%;
  text-align: center;
  padding: 0.5rem;
`;

const HomeOption = styled(AiFillHome)`
  height: 2rem;
  width: 2rem;
  color: var(--gray);
`;

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const renderOptions = (arrayOfRetailers) => {
    return arrayOfRetailers.map((el) => {
      if (el.name.toLowerCase() === "overview") {
        return <HomeOption />;
      }
      return <SmallOption>{el.name.substring(0, 2)}</SmallOption>;
    });
  };

  return (
    <Menu open={open}>
      <Logo
        src={open === false ? logoE : logoElm}
        onClick={() => setOpen(!open)}
      />
      <ul>{renderOptions(optionsArray)}</ul>
    </Menu>
  );
};

export default Sidebar;
