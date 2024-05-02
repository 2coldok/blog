import MenuList from "./MenuList";
import { DrawerModal } from "../DrawerModal";

// redux
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setMenuModal } from "../../redux/slice/modalSlice";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import styled from "styled-components";



export default function Menu() {
  const dispatch = useDispatch();
  const menuModal = useSelector((state: RootState) => state.modal.menuModal);
  
  return (
    <>
      <MenuButton onClick={() => dispatch(setMenuModal(true))}>
        <HiOutlineMenuAlt1 />
      </MenuButton>
  
      <DrawerModal active={menuModal} onClose={() => dispatch(setMenuModal(false))} direction="left">
        <MenuList />
      </DrawerModal>
    </>
  );
}

const MenuButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin-right: 1em;

  & > svg {
    font-size: 3em;
  }
`;
