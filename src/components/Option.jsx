import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { AiFillHome } from "react-icons/ai";
import { FaTag } from "react-icons/fa";
import { VscTriangleRight, VscTriangleDown } from "react-icons/vsc";

const SmallOption = styled.li`
  background-color: var(--gray);
  height: 1.5rem;
  width: 1.5rem;
  margin: 0.5rem 0.2rem;
  border-radius: 50%;
  text-align: center;
  padding: 0.5rem;
  &:hover {
    cursor: pointer;
  }
`;

const HomeOption = styled(AiFillHome)`
  color: var(--gray);
  &:hover {
    cursor: pointer;
  }
`;

const HomeOptionClosed = styled(HomeOption)`
  height: 2rem;
  width: 2rem;
  margin: 1rem 0.5rem;
`;

const Tag = styled(FaTag)`
  color: var(--gray);
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const OptionWrapper = styled(Wrapper)`
  margin: 0.5rem 0.2rem;
`;

const OptionText = styled.a`
  margin-left: 0.5rem;
`;

export const ClosedOption = (props) => {
  const { name, home, pages } = props;
  if (home) {
    return (
      <Wrapper>
        <HomeOptionClosed />
      </Wrapper>
    );
  }
  if (pages) {
    return (
      <Wrapper>
        <VscTriangleRight /> <SmallOption>{name}</SmallOption>
      </Wrapper>
    );
  }
  return <SmallOption>{name}</SmallOption>;
};

export const Option = (props) => {
  const { home, name, pages } = props;
  if (pages) {
    return <OptionDropdown home={home} name={name} pages={pages} />;
  }
  return (
    <OptionWrapper>
      {home ? <HomeOption /> : <Tag />}
      <OptionText>{name}</OptionText>
    </OptionWrapper>
  );
};

export const OptionDropdown = (props) => {
  const { home, name, pages } = props;
  const [open, setOpen] = useState(false);

  const renderDropdown = () => {
    return pages.map((el, ind) => {
      return <li key={"dd" + ind}>{el}</li>;
    });
  };

  return (
    <OptionWrapper>
      {open ? <VscTriangleDown /> : <VscTriangleRight />}
      <OptionText onClick={() => setOpen(!open)}>{name}</OptionText>
      {open && <ul>{renderDropdown()}</ul>}
    </OptionWrapper>
  );
};
