import React from "react";
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
  height: 2rem;
  width: 2rem;
  margin: 1rem 0.5rem;
  color: var(--gray);
  &:hover {
    cursor: pointer;
  }
`;

const TriangleWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export const ClosedOption = (props) => {
  const { name, home, pages } = props;
  if (home) {
    return <HomeOption />;
  }
  if (pages) {
    return (
      <TriangleWrapper>
        <VscTriangleRight /> <SmallOption>{name}</SmallOption>
      </TriangleWrapper>
    );
  }
  return <SmallOption>{name}</SmallOption>;
};

export const Option = (props) => {
  const { home, name } = props;
  return <SmallOption>{name}</SmallOption>;
};
