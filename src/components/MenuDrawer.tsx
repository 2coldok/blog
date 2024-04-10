import { useState } from "react";
import styled from "styled-components";
import { LuMenu } from "react-icons/lu";
import MenuList from "./MenuList";
import { LeftDrawerModal } from "./LeftDrawerModal";

export default function MenuDrawer() {
  const [menuDrawer, setMenuDrawer] = useState(false);
  
  return (
    <>
      <MenuButton onClick={() => setMenuDrawer(true)}>
        <LuMenu />
      </MenuButton>
      {/* <Drawer anchor="left" open={menuDrawer} onClose={toggleDrawer(false)}>
        <MenuList />
      </Drawer> */}
      <LeftDrawerModal active={menuDrawer} onClose={() => setMenuDrawer(false)}>
        <MenuList />
      </LeftDrawerModal>
    </>
  );
}

const MenuButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin-right: 0.8em;

  & > svg {
    font-size: 3.5em;
  }
  background-color:transparent;
  /* background-color: pink; */
`;
