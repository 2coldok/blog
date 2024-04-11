import styled from "styled-components";
import { TbSearch } from "react-icons/tb";
import { ImBrightnessContrast } from "react-icons/im";
import { IoMusicalNotes } from "react-icons/io5";
import Music from "./Music";
import { ToolkitModal } from "./ToolkitModal";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useDispatch } from "react-redux";
import { setMusicModal, setSearchModal, setThemeModal } from "../redux/slice/modalSlice";
import Search from "./Search";

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
      <BigSearchButtonContainer onClick={() => dispatch(setSearchModal(true))}>
        <SearchButton>
          <TbSearch />
          <span>제목 또는 태그 검색</span>
        </SearchButton>
      </BigSearchButtonContainer>
      <SmallSearchButtonContainer onClick={() => dispatch(setSearchModal(true))}>
        <ToolBoxButton>
          <TbSearch color="#0055FF" />
        </ToolBoxButton>
      </SmallSearchButtonContainer>
      <ToolkitModal active={searchModal} onClose={() => dispatch(setSearchModal(false))}>
        <Search />
      </ToolkitModal>

      <ToolBoxButton onClick={() => dispatch(setThemeModal(true))}>
        <ImBrightnessContrast color="#FAF58C" />
      </ToolBoxButton> 
      <ToolkitModal active={themeModal} onClose={() => dispatch(setThemeModal(false))}>
        <p>테마 content</p>
      </ToolkitModal>
      
      <ToolBoxButton onClick={() => dispatch(setMusicModal(true))}>
        <IoMusicalNotes color="#E0115F" />
      </ToolBoxButton>
      <ToolkitModal active={musicModal} onClose={() => dispatch(setMusicModal(false))}>
        <Music />
      </ToolkitModal>
    </>
  );
}

const ToolBoxButton = styled.button`
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
  background-color: transparent;
  /* background-color: pink; */
`;
const BigSearchButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin-right: 0.5em;
  background-color: transparent;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SmallSearchButtonContainer = styled.div`
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
  background-color: transparent;

  @media (max-width: 768px) {
    display: flex;
  }
  /* background-color: pink; */
`;

const SearchButton = styled.button`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  padding: 0;
  /* margin-left: 0.3em; */

  background-color: transparent;
  border-radius: 1em;
  border: 1.5px solid blue;
  padding: 0.5em;
  height: 3em;
  width: 170px;
  & > svg {
    font-size: 1.5em;
    margin-right: 0.3em;
  }
  & > span {
    font-size: 1em;
  }
`;
