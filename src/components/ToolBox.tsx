
import styled from "styled-components";
import { TbSearch } from "react-icons/tb";
import { ImBrightnessContrast } from "react-icons/im";
import { IoMusicalNotes } from "react-icons/io5";

export default function ToolBox() {
  return (
    <>
      <BigSearchButtonContainer>
        <SearchButton>
          <TbSearch />
          <span>제목 또는 태그 검색</span>
        </SearchButton>
      </BigSearchButtonContainer>
      <SmallSearchButtonContainer>
        <ToolBoxButton>
          <TbSearch />
        </ToolBoxButton>
      </SmallSearchButtonContainer>
      <ToolBoxButton>
        <ImBrightnessContrast />
      </ToolBoxButton>
      <ToolBoxButton>
        <IoMusicalNotes />
      </ToolBoxButton>
    </>
  );
}

const ToolBoxButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin-left: 0.3em;

  & > svg {
    font-size: 2.5em;
    margin-right: 0.3em;
    margin-left: 0.3em;
  }
  background-color: transparent;
  /* background-color: pink; */
`;
const BigSearchButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin-right: 0.5em;
  background-color: transparent;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SmallSearchButtonContainer = styled.button`
  display: none;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin-left: 0.3em;

  & > svg {
    font-size: 2.5em;
    margin-right: 0.3em;
    margin-left: 0.3em;
  }
  background-color: transparent;

  @media (max-width: 768px) {
    display: flex;
  }
  /* background-color: pink; */
`;

const SearchButton = styled.button`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  padding: 0;
  /* margin-left: 0.3em; */

  background-color: transparent;
  border-radius: 1em;
  border: 1.5px solid blue;
  padding: 0.5em;
  height: 3em;
  width: 170px;
  & > svg {
    font-size: 1.5em;
    margin-right: 0.3em;
  }
  & > span {
    font-size: 1em;
  }
`;
