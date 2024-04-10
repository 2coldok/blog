import styled from "styled-components";
import { LuMenu } from "react-icons/lu";
import MenuList from "./MenuList";
import { LeftDrawerModal } from "./LeftDrawerModal";
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
  
      <LeftDrawerModal active={menuModal} onClose={() => dispatch(setMenuModal(false))}>
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
