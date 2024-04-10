import { ReactNode } from 'react';
import styled from 'styled-components';

interface ILeftDrawerModal {
  active: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function LeftDrawerModal({ active, onClose, children }: ILeftDrawerModal) {
  
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
  background-color: rgba(6, 43, 73, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  
  display: ${(props) => (props.$active ? 'flex' : 'none')};
`;

const DrawerContainer = styled.div<{ $active: boolean }>`
  background-color: #1a6547;
  position: fixed;
  top: 0;
  left: 0;
  transform: ${(props) => (props.$active ? 'translateX(0)' : 'translateX(-100%)')};
  width: 300px;
  height: 100%;
  z-index: 13;

  transition: transform 0.2s ease-in-out;
`;
