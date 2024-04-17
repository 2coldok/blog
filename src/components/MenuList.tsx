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
      <Br></Br>
      <Front>
        <span>프론트엔드</span>
        {ArticlesData.map((articleData) => (
          <p onClick={handleClick(articleData.category)}>
            {articleData.name}
          </p>
        ))}  
      </Front>
      <Br></Br>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 250px;
  color: #aebacb;
  display: flex;
  flex-direction: column;
  padding: 0.2em;
  /* align-items: center; */

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

const Br = styled.div`
  width: 95%;
  height: 1px;
  margin-left: 0.4em;
  margin-top: 0.9em;
  margin-bottom: 0.9em;
  border-bottom: 1px solid #aebacb;
`

const Front = styled.div`
  display: flex;
  text-align: left;
  
  
  /* align-items: center; */
  flex-direction: column;
  & > p {
    font-size: 20px;
    /* background-color: yellow; */
    margin: 5px;
    margin-left: 15px;
    &:hover {
      filter: brightness(125%);
      cursor: pointer;
    }
    
    /* margin-left: 0.5em; */

  }

  & > span {
    margin-left: 15px;
    margin-bottom: 10px;
    font-size: 20px;
    color: #3d3e46;
  }


  font-weight: bold;
  /* background-color: #1b1b1b; */
  
`
