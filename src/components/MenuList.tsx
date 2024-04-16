import { ArticlesData } from '../meta/ArticlesData';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setMenuModal } from '../redux/slice/modalSlice';
import styled from 'styled-components';

export default function MenuList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (category: string) => () => {
    dispatch(setMenuModal(false));
    navigate(`/${category}`);
  };
  
  return (
    <Wrapper>
      <Header>
        <ProfileImage src="https://2coldok.github.io/blog/image/profile.png" alt="profile" />
        <ProfileImage src="https://2coldok.github.io/blog/image/github.png" alt="github" />
        <ProfileImage src="https://2coldok.github.io/blog/image/gmail.png" alt="gmail" />

        {/* <label>이찬웅</label> */}
      </Header>
      {ArticlesData.map((articleData) => (
        <ItemButton onClick={handleClick(articleData.category)}>{articleData.name}</ItemButton>
      ))}
      ddcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdcdc
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.2em;
`
const Header = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  margin: 1.5em 1em;

  & > label {
    margin-top: 0.6em;
    color: #AEBACB;
  }
`

const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 0.6em;
  background-color: white;
  margin-bottom: 0.5em;
`

const ItemButton = styled.button`
  margin: 0.2em;
  font-size: 1em;
  background-color: transparent;
  color: #AEBACB;
  padding: 0.4em 1em;
  border-radius: 0.5em;
  
  
  &:hover {
    background-color: #1F262E;
  }
`