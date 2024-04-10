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
    <>
      <ListContainer>
        {ArticlesData.map((articleData) => (
          <ItemButton onClick={handleClick(articleData.category)}>{articleData.name}</ItemButton>
        ))}
      </ListContainer>
    </>
  )
}

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const ItemButton = styled.button`
  margin: 0.5rem 0.5rem;
  font-size: 2rem;
  background-color: green;
`
