import React, { useState } from "react";
import { Drawer } from "@mui/material";
import styled from "styled-components";
import { LuMenu } from "react-icons/lu";

export default function MenuDrawer() {
  const [menuDrawer, setMenuDrawer] = useState(false);
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setMenuDrawer(open);
    };
  return (
    <>
      <MenuButton onClick={toggleDrawer(true)}>
        <LuMenu />
      </MenuButton>
      <Drawer anchor="left" open={menuDrawer} onClose={toggleDrawer(false)}>
        elloddfdfdfdfdfdfdsfsdfsfsdfs
      </Drawer>
    </>
  );
}

const MenuButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.6em;
  padding: 0;

  & > span {
    font-size: 2em;
  }

  & > svg {
    font-size: 3em;
  }

  background-color: pink;
`;
