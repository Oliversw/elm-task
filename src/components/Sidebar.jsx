import React, { useState } from "react";

import * as S from "./sidebar.styles";
import { ClosedOption, Option } from "./Options";

import logoE from "../assets/elmLogoE.png";
import logoElm from "../assets/elmLogo.png";

// Fake data used to populate the sidebar
const optionsArray = [
  { name: "Overview", pages: ["Sales Summary", "Rate of Sale", "Discounts"] },
  { name: "Amazon", pages: ["Overview", "Promotions"] },
  { name: "Co-Op", pages: ["Overview", "Promotions"] },
  { name: "Holland & Barrett", pages: [] },
  { name: "Morrisons", pages: [] },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  // logic to render options depending on whether the sidebar is open or not
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
          />
        );
      });
    } else if (open) {
      return arrayOfRetailers.map((el, ind) => {
        return (
          <Option
            key={el.name + ind}
            name={el.name}
            pages={el.pages.length > 1 ? el.pages : false}
            home={el.name.toLowerCase() === "overview"}
          />
        );
      });
    }
  };

  return (
    <S.Menu
      open={open}
      onClick={() => {
        if (!open) setOpen(!open);
      }}
    >
      <S.Logo
        src={open ? logoElm : logoE}
        onClick={() => setOpen(!open)}
        open={open}
      />
      <ul>{renderOptions(optionsArray, open)}</ul>
    </S.Menu>
  );
};

export default Sidebar;
