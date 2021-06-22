import React, { useState } from "react";
import * as S from "./options.styles";
// Ideally I would refactor some of these components to be more DRY
// This would work best when refactoring with proper links to pages

export const ClosedOption = (props) => {
  const { name, home, pages } = props;
  if (home) {
    return (
      <S.Wrapper>
        <S.HomeOptionClosed />
      </S.Wrapper>
    );
  }
  if (pages) {
    return (
      <S.Wrapper>
        <S.ArrRight /> <S.SmallOption>{name}</S.SmallOption>
      </S.Wrapper>
    );
  }
  return (
    <S.Wrapper>
      <S.SmallOption>{name}</S.SmallOption>
    </S.Wrapper>
  );
};

export const Option = (props) => {
  const { home, name, pages } = props;
  if (pages) {
    return <OptionDropdown home={home} name={name} pages={pages} />;
  }
  return (
    <S.OptionWrapper>
      {home ? <S.HomeOption /> : <S.Tag />}
      <S.OptionText>{name}</S.OptionText>
    </S.OptionWrapper>
  );
};

//
export const OptionDropdown = (props) => {
  const { home, name, pages } = props;
  const [open, setOpen] = useState(false);

  const renderDropdown = () => {
    return pages.map((el, ind) => {
      return <li key={"dd" + ind}>{el}</li>;
    });
  };

  return (
    <S.OptionWrapper>
      {open ? (
        <S.ArrDown onClick={() => setOpen(!open)} />
      ) : (
        <S.ArrRight onClick={() => setOpen(!open)} />
      )}
      {home ? (
        <S.HomeOption onClick={() => setOpen(!open)} />
      ) : (
        <S.Tag onClick={() => setOpen(!open)} />
      )}
      <S.OptionText onClick={() => setOpen(!open)}>{name}</S.OptionText>
      {open && <S.DropDown>{renderDropdown()}</S.DropDown>}
    </S.OptionWrapper>
  );
};
