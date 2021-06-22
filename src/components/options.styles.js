import styled, { keyframes } from "styled-components";

import { AiFillHome } from "react-icons/ai";
import { FaTag } from "react-icons/fa";
import { VscTriangleRight, VscTriangleDown } from "react-icons/vsc";

export const HomeOption = styled(AiFillHome)`
  color: var(--teal);
  font-size: 1.5rem;
  grid-area: icon;
  justify-self &:hover {
    cursor: pointer;
  }
`;

export const HomeOptionClosed = styled(HomeOption)`
  height: 2rem;
  width: 2rem;
  margin: 1rem 0.5rem;
`;

export const Tag = styled(FaTag)`
  color: var(--gray);
  grid-area: icon;
  font-size: 1.5rem;
`;

export const ArrRight = styled(VscTriangleRight)`
  margin-right: 0.5rem;
`;

export const ArrDown = styled(VscTriangleDown)``;

export const Wrapper = styled.div`
  width: 90%;
  margin: 0 0.2rem;
  display: grid;
  grid-template-columns: 1rem auto;
  grid-template-areas: "arrow icon";
  align-items: center;
  grid-template-rows: 3.5rem;

  &:hover {
    cursor: pointer;
  }
`;

export const SmallOption = styled.li`
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

export const OptionWrapper = styled(Wrapper)`
  margin: 0.5rem 0.2rem;
  display: grid;
  grid-template-columns: 2rem 2.5rem auto;
  grid-template-rows: 2rem;
  grid-template-areas:
    "arrow icon text"
    ". . dropdown";
  align-items: center;
`;

export const OptionText = styled.a`
  justify-self: start;
  grid-area: text;
  font-size: 1.1rem;
`;

export const fadeInOpacity = keyframes`
  0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`;

export const DropDown = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  grid-area: dropdown;
  padding: 0.5rem 0;

  opacity: 1;
  animation-name: ${fadeInOpacity};
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 0.5s;

  li {
    margin: 0.4rem 0;
  }
`;
