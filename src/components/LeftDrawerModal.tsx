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

const DrawerContainer = styled.div<{ $active: boolean }>`
  background-color: #1a6547;
  position: fixed;
  top: 0;
  left: ${(props) => (props.$active ? '0' : '-100%')};
  width: 300px;
  height: 100%;
  z-index: 13;

  transition: left 0.3s ease-in-out;
`;

const DrawerOutside = styled.div<{ $active: boolean }>`
  background-color: rgba(6, 43, 73, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  
  display: flex;
  visibility: ${(props) => (props.$active ? 'visible' : 'hidden')};
  opacity: ${(props) => props.$active ? '1' : '0'};
  transition: opacity 0.3s ease-in-out;
`;
