import { ArticlesData } from "../meta/ArticlesData";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMenuModal } from "../redux/slice/modalSlice";
import styled from "styled-components";

import GmailButton from "./menu/GmailButton";
export default function MenuList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (category: string) => () => {
    dispatch(setMenuModal(false));
    navigate(`/${category}`);
  };



  return (
    <Wrapper>
      <GmailButton />
      <h1>Fronted</h1>
      {ArticlesData.map((articleData) => (
        <ItemButton onClick={handleClick(articleData.category)}>
          <h3>{articleData.name}</h3>
        </ItemButton>
      ))}
    </Wrapper>
  );
}


const Wrapper = styled.div`
  width: 250px;
  color: #aebacb;
  display: flex;
  flex-direction: column;
  padding: 0.2em;

  & > h1 {
    /* background-color: yellow; */
    margin: 0;
    color: white;
    text-align: center;
    border: 1px solid yellow;
    border-radius: 1em;
    margin-bottom: 0.3em;
  }
`;


const ItemButton = styled.button`
  /* margin: 0.2em; */
  font-size: 1em;
  background-color: transparent;
  color: #aebacb;
  padding: 0 3em;
  border-radius: 0.5em;
  margin-bottom: 0.3em;

  & > h3 {
    margin: 0.5em;
  }

  &:hover {
    background-color: #1f262e;
  }
`;
