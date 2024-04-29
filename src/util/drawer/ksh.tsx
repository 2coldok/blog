import { ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';

type Direction = 'left' | 'right' | 'top';

interface ILeftDrawerModal {
  active: boolean;
  onClose: () => void;
  children: ReactNode;
  direction: Direction;
}

export function DrawerModal2({ active, onClose, direction, children }: ILeftDrawerModal) {
  const [isActive, setIsActive] = useState(active);

  useEffect(() => {
    const handleResize = () => {
      setIsActive(window.innerWidth >= 1300 || active);  // 1000px 이상 또는 active가 true일 때 활성화
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const originalStyle = window.getComputedStyle(document.body).overflow;

    if (window.innerWidth < 1300) {
      document.body.style.overflow = isActive ? 'hidden' : originalStyle;
    }  // 1000px 미만일 경우에만 overflow 스타일 조정

    return () => {
      window.removeEventListener('resize', handleResize);
      if (window.innerWidth < 1300) {
        document.body.style.overflow = originalStyle;  // 원래 스타일로 복원
      }
    };
  }, [active, isActive]);

  return (
    <>
      <DrawerOutside $active={isActive} $transparent={window.innerWidth >= 1300} onClick={onClose} />
      <DrawerContainer $active={isActive} $direction={direction}>
        {children}
      </DrawerContainer>
    </>
  );
}

const DrawerOutside = styled.div<{ $active: boolean, $transparent: boolean }>`
  background-color: ${(props) => props.$transparent ? 'transparent' : 'rgba(0, 0, 0, 0.5)'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3000;
  display: ${(props) => (props.$active ? 'flex' : 'none')};
  pointer-events: ${(props) => (props.$active && !props.$transparent) ? 'auto' : 'none'}; // 모달 외부 클릭 비활성화 조건
`;

const DrawerContainer = styled.div<{ $active: boolean, $direction: Direction }>`
  background-color: ${({ theme }) => theme.colors.block};
  position: fixed;
  top: ${({ $direction }) => $direction === 'top' ? '0' : 'auto'};
  bottom: ${({ $direction }) => $direction === 'top' ? 'auto' : '0'};
  left: ${({ $direction }) => $direction === 'left' ? '0' : $direction === 'top' ? '0' : 'auto'};
  right: ${({ $direction }) => $direction === 'right' ? '0' : 'auto'};
  width: ${({ $direction }) => $direction === 'top' ? '100%' : '250px'};
  height: ${({ $direction }) => $direction === 'top' ? '250px' : '100%'};
  transform: ${({ $active, $direction }) =>
    !$active ? ($direction === 'left' ? 'translateX(-100%)' : $direction === 'right' ? 'translateX(100%)' : 'translateY(-100%)') : 'translateX(0)'};
  z-index: 4000;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: ${({ $direction }) =>
    $direction === 'left' ? '0 1rem 1rem 0' :
    $direction === 'right' ? '1rem 0 0 1rem' :
    '0 0 1rem 1rem'};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: transform 0.2s ease-in-out;
`;
