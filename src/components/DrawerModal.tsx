import { ReactNode, useEffect} from 'react';
import styled from 'styled-components';

type Direction = 'left' | 'right' | 'top';

interface ILeftDrawerModal {
  active: boolean;
  onClose: () => void;
  children: ReactNode;
  direction: Direction;
}

export function DrawerModal({ active, onClose, direction, children }: ILeftDrawerModal) {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = active ? 'hidden' : originalStyle;

    return () => {
      document.body.style.overflow = originalStyle;
    }
  }, [active])

  return (
    <>
      <DrawerOutside $active={active} onClick={onClose} />
      <DrawerContainer $active={active} $direction={direction}>
        {children}
      </DrawerContainer>
    </>
  );
}

const DrawerOutside = styled.div<{ $active: boolean }>`
  background-color: rgba(0, 0, 0, 0.5);

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3000;
  
  display: ${(props) => (props.$active ? 'flex' : 'none')};
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
