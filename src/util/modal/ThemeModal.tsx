import { ReactNode, RefObject, useEffect, useState } from 'react';
import styled from 'styled-components';

interface IToolkitModal {
  active: boolean;
  onClose: () => void;
  children: ReactNode;
  buttonRef: RefObject<HTMLElement>;
}

export function ThemeModal({ active, onClose, buttonRef, children }: IToolkitModal) {
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  useEffect(() => {
    if (active && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setTop(rect.bottom + window.scrollY);
      setLeft(rect.left + window.scrollX);
    }
  }, [active, buttonRef]);


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
      <ModalContainer $active={active} style={{ top: `${top}px`, left: `${left}px` }}>
        {/* <CloseButton onClick={handleClick}>X</CloseButton> */}
        {children}
      </ModalContainer>
    </>
  );
}

const ModalOutside = styled.div<{ $active: boolean }>`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2020;

  display: ${(props) => (props.$active ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div<{ $active: boolean }>`
  background-color: red;
  position: fixed;
  transform: translateX(-50%);  // X축 중앙 정렬
  z-index: 2023;
  display: ${(props) => (props.$active ? 'flex' : 'none')};
  flex-direction: column;
  width: 10%;
  max-width: 1100px;
  height: auto;
  padding: 20px;  // 내부 여백
`;
