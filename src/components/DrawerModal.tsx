import { ReactNode, useEffect} from 'react';
import styled from 'styled-components';

type Direction = 'left' | 'right';

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
  background-color: rgba(0, 0, 0, 0.6);

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3000;
  
  display: ${(props) => (props.$active ? 'flex' : 'none')};
`;

const DrawerContainer = styled.div<{ $active: boolean; $direction: Direction }>`
  background-color: ${({theme}) => theme.colors.background};

  position: fixed;
  top: 0;
  ${props => props.$direction === 'left' ? 'left: 0;' : 'right: 0;'};
  transform: ${props => (props.$active ? 'translateX(0)' : (props.$direction === 'left' ? 'translateX(-100%)' : 'translateX(100%)'))};
  max-width: 250px;
  height: 100%;
  z-index: 4000;
  overflow-y: auto;

  transition: transform 0.2s ease-in-out;
`;
