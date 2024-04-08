// import React from 'react';
import styled from 'styled-components';

import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import List from '@mui/material/List';

export default function MenuList() {
  const lists = ['React', 'JavaScript', 'TypeScript', 'CSS', 'Next', 'React-Router-Dom', 'Redux'];
  const lists2 = ['버서커', '카멘', '비아키스', '발탄'];
  return (
    <p>
      <ListContainer>
        {lists.map((item) => (
          <ItemButton>{item}</ItemButton>
        ))}
      </ListContainer>
      <Divider />
      <ListContainer>
        {lists2.map((item) => (
          <ItemButton>{item}</ItemButton>
        ))}
      </ListContainer>
    </p>
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