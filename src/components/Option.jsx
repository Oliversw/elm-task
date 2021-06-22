import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

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
  justify-self: start;
  grid-area: icon;

  &:hover {
    cursor: pointer;
  }
`;

const HomeOption = styled(AiFillHome)`
  color: var(--gray);
  font-size: 1.5rem;
  grid-area: icon;
  justify-self &:hover {
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
  grid-area: icon;
  font-size: 1.5rem;
`;

const ArrRight = styled(VscTriangleRight)`
  margin-right: 0.5rem;
`;

const Wrapper = styled.div`
  width: 90%;
  margin: 0 0.2rem;
  display: grid;
  grid-template-columns: 1rem auto;
  grid-template-areas: "arrow icon";
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const OptionWrapper = styled(Wrapper)`
  margin: 0.5rem 0.2rem;
  display: grid;
  grid-template-columns: 2rem 2.5rem auto;
  grid-template-rows: auto;
  grid-template-areas:
    "arrow icon text"
    ". . dropdown";
  align-items: center;
`;

const OptionText = styled.a`
  justify-self: start;
  grid-area: text;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`;

const fadeInOpacity = keyframes`
  0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`;

const DropDown = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  grid-area: dropdown;

  opacity: 1;
  animation-name: ${fadeInOpacity};
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 0.5s;

  li {
    margin: 0.4rem 0;
  }
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
  return (
    <Wrapper>
      <SmallOption>{name}</SmallOption>
    </Wrapper>
  );
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
      {open ? <VscTriangleDown /> : <ArrRight />}
      {home ? <HomeOption /> : <Tag />}
      <OptionText onClick={() => setOpen(!open)}>{name}</OptionText>
      {open && <DropDown>{renderDropdown()}</DropDown>}
    </OptionWrapper>
  );
};
