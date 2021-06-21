import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { ClosedOption, Option } from "./Option";

import logoE from "../assets/elmLogoE.png";
import logoElm from "../assets/elmLogo.png";

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
  width: ${(props) => (props.open ? "15rem" : "6rem")};
  background-color: var(--gray-dark);
  color: white;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  transition: width, left, right, 0.5s;
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-end;
  }
`;

const Logo = styled.img`
  margin: 3rem 1rem;
  width: ${(props) => (props.open ? "4rem" : "1.8rem")};

  &:hover {
    cursor: pointer;
  }
`;

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const renderOptions = (arrayOfRetailers, open) => {
    if (!open) {
      return arrayOfRetailers.map((el, ind) => {
        if (el.name.toLowerCase() === "overview") {
          return <ClosedOption home key={el.name + ind} />;
        }
        return (
          <ClosedOption
            key={el.name + ind}
            name={el.name.substring(0, 2)}
            pages={el.pages.length > 1}
          ></ClosedOption>
        );
      });
    } else {
      return <Option />;
    }
  };

  return (
    <Menu
      open={open}
      onClick={() => {
        if (!open) setOpen(!open);
      }}
    >
      <Logo
        src={open ? logoElm : logoE}
        onClick={() => setOpen(!open)}
        open={open}
      />
      <ul>{renderOptions(optionsArray, open)}</ul>
    </Menu>
  );
};

export default Sidebar;
