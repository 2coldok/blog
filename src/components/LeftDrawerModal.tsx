import { ReactNode, useEffect } from 'react';
import styled from 'styled-components';

interface ILeftDrawerModal {
  active: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function LeftDrawerModal({ active, onClose, children }: ILeftDrawerModal) {

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
      <DrawerContainer $active={active}>
        {children}
      </DrawerContainer>
    </>
  );
}

const DrawerOutside = styled.div<{ $active: boolean }>`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  
  display: ${(props) => (props.$active ? 'flex' : 'none')};
`;

const DrawerContainer = styled.div<{ $active: boolean }>`
  background-color: pink;
  position: fixed;
  top: 0;
  left: 0;
  transform: ${(props) => (props.$active ? 'translateX(0)' : 'translateX(-100%)')};
  width: 300px;
  height: 100%;
  z-index: 13;

  transition: transform 0.2s ease-in-out;
`;
