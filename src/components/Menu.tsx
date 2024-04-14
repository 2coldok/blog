import styled from "styled-components";
import { LuMenu } from "react-icons/lu";
import MenuList from "./MenuList";
import { DrawerModal } from "./DrawerModal";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setMenuModal } from "../redux/slice/modalSlice";

export default function Menu() {
  const dispatch = useDispatch();
  const menuModal = useSelector((state: RootState) => state.modal.menuModal);
  
  return (
    <>
      <MenuButton onClick={() => dispatch(setMenuModal(true))}>
        <LuMenu />
      </MenuButton>
  
      <DrawerModal active={menuModal} onClose={() => dispatch(setMenuModal(false))} direction="left">
        <MenuList />
      </DrawerModal>
    </>
  );
}

const MenuButton = styled.button`
  color: #e3bdbd;
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
