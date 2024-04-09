import { FC, ReactNode, useEffect, useRef } from 'react';
import styled from 'styled-components';

const ModalBackdropX = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(182, 182, 182, 0.5);
  
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalViewX = styled.div`
  background-color: #364a6c;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  gap: 10px;
  z-index: 1001;
  width: 70%;
  height: 60%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CloseButton = styled.button`
  align-self: flex-end;
`;

interface ModalProps {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  children: ReactNode;
}

export const ModalX: FC<ModalProps> = ({ showModal, setShowModal, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (!showModal) return null;

  return (
    <ModalBackdropX>
      <ModalViewX ref={modalRef} onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={() => setShowModal(false)}>닫기</CloseButton>
        {children}
      </ModalViewX>
    </ModalBackdropX>
  );
};