import { TbSearch } from "react-icons/tb";
import { ImBrightnessContrast } from "react-icons/im";
import { IoMusicalNotes } from "react-icons/io5";

// redux
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useDispatch } from "react-redux";
import { setMusicModal, setSearchModal, setThemeModal } from "../redux/slice/modalSlice";

import Search from "./Search";
import { DrawerModal } from "./DrawerModal";
import { ToolkitModal } from "./ToolkitModal";
import Music from "./Music";

import styled from "styled-components";

export default function ToolBox() {
  // 서로 개별적인 상태인데 이렇게 묶어서 가져오면 한상태 변경이 다른 선택자의 호출까지 트리거함.
  // 번거롭더라도 따로 따로 useSelector를 이용해 상태 가져오기.
  // const { searchModal, themeModal, musicModal } = useSelector((state: RootState) => ({
  //   searchModal: state.modal.searchModal,
  //   themeModal: state.modal.themeModal,
  //   musicModal: state.modal.musicModal,
  // }));
  const searchModal = useSelector((state: RootState) => state.modal.searchModal);
  const themeModal = useSelector((state: RootState) => state.modal.themeModal);
  const musicModal = useSelector((state: RootState) => state.modal.musicModal);

  const dispatch = useDispatch();
  
  return (
    <>
      <BigSearchButton onClick={() => dispatch(setSearchModal(true))}>
        <TbSearch />
        <span>제목 또는 태그 검색</span>
      </BigSearchButton>
      <SmallSearchButton onClick={() => dispatch(setSearchModal(true))}>
        <TbSearch/>
      </SmallSearchButton>
      <ToolkitModal active={searchModal} onClose={() => dispatch(setSearchModal(false))}>
        <Search />
      </ToolkitModal>

      <ToolButton onClick={() => dispatch(setThemeModal(true))}>
        <ImBrightnessContrast/>
      </ToolButton> 
      <ToolkitModal active={themeModal} onClose={() => dispatch(setThemeModal(false))}>
        <p>테마 content</p>
      </ToolkitModal>
      
      <ToolButton onClick={() => dispatch(setMusicModal(true))}>
        <IoMusicalNotes/>
      </ToolButton>
      <DrawerModal active={musicModal} onClose={() => dispatch(setMusicModal(false))} direction="right">
        <Music />
      </DrawerModal>
    </>
  );
}

const BigSearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 40px;
  padding: 1.5em;
  margin-right: 0.5em;

  border: 1.5px solid ${({theme}) => theme.colors.clicked};
  color: ${({theme}) => theme.colors.subtitle};
  border-radius: 2em;

  & > svg {
    font-size: 1.5em;
    margin-right: 0.3em;
  }

  & > span {
    font-weight: bold;  
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const SmallSearchButton = styled.button`
  display: none;
  justify-content: center;
  align-items: center;

  padding: 0;
  margin-left: 0.3em;

  & > svg {
    font-size: 2.5em;
    margin-right: 0.3em;
    margin-left: 0.3em;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const ToolButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0;
  margin-left: 0.3em;

  & > svg {
    font-size: 2.5em;
    margin-right: 0.3em;
    margin-left: 0.3em;
  }
`;