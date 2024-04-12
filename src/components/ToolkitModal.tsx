import { ReactNode, useEffect } from 'react';
import styled from 'styled-components';

interface IToolkitModal {
  active: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function ToolkitModal({ active, onClose, children }: IToolkitModal) {

  // 이벤트 전파 방지.
  // ModalOutside에서도 onClose를 이용해 모달 창을 닫는다. 그래서 여기에 이벤트 핸들러가 바인딩 되어있음.
  // ModalContainer에서 이벤트 전파 방지를 하지 않으면 클릭 이벤트가 상위 요소인 ModalOutside까지 전파됨.
  // onClose 함수가 두번 호출될 수도 있음으로 이는 예상치 못한 버그를 발생시킬 수 있음.
  // const handleClick = (e: React.MouseEvent) => {
  //   e.stopPropagation();
  //   onClose();
  // }

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = active ? 'hidden' : originalStyle;
    
    return () => {
      document.body.style.overflow = originalStyle;
    }
  }, [active])

  // 조건부 렌더링 최적화.
  // active가 false일때 DOM에서 컴포넌트를 완전히 제거하기 위함.
  if (!active) return null;

  return (
    <>
      <ModalOutside $active={active} onClick={onClose}/>
      <ModalContainer $active={active}>
        {/* <CloseButton onClick={handleClick}>X</CloseButton> */}
        {children}
      </ModalContainer>
    </>
  )

}

const ModalOutside = styled.div<{ $active: boolean }>`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 13;

  display: ${(props) => (props.$active ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div<{ $active: boolean }>`
  background-color: #1a6547;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 70%;

  display: ${(props) => (props.$active ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  z-index: 39;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform: none;
  }
`;

// const CloseButton = styled.button`
//   width: 5%;
//   height: 5%;
//   align-self: flex-end;
// `
