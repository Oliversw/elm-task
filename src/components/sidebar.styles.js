import styled from "styled-components";

export const Menu = styled.nav`
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
    align-items: ${(props) => (props.open ? "flex-start" : "center")};
    width: 100%;
  }
`;

export const Logo = styled.img`
  margin: 3rem 1rem;
  width: ${(props) => (props.open ? "4rem" : "1.8rem")};

  &:hover {
    cursor: pointer;
  }
`;
