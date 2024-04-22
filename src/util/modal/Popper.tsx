import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';

interface IPopper {
  // 테마 버튼 자리
  anchorEl: HTMLElement | null;

  children: React.ReactNode;
  active: boolean;
  onClose: () => void;
}

export function Popper({ anchorEl, children, active, onClose }: IPopper) {
  const [popperStyle, setPopperStyle] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
  const popperRef = useRef<HTMLDivElement>(null);
  
  const updatePosition = useCallback(() => {
    if (anchorEl && popperRef.current) {
      const anchorRect = anchorEl.getBoundingClientRect();
      const popperRect = popperRef.current.getBoundingClientRect();
      setPopperStyle({
        top: anchorRect.bottom,
        //left: anchorRect.left + (anchorRect.width - popperRect.width) / 2  하면 테마 버튼 중앙 밑에 위치됨.
        left: anchorRect.left + (anchorRect.width - popperRect.width),
      });
    }
  }, [anchorEl]); 

  useEffect(() => {
    if (active) {
      updatePosition();
      window.addEventListener('resize', updatePosition);
    }

    // 외부 클릭 감지
    const handleClickOutside = (event: MouseEvent) => {
      if (popperRef.current && !popperRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    // 문서 전체 이벤트리스너 등록
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('resize', updatePosition);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [updatePosition, active, onClose]);

  if (!active) return null;

  return (
    <PopperContainer ref={popperRef} top={popperStyle.top} left={popperStyle.left}>
      {children}
    </PopperContainer>
  );
}

const PopperContainer = styled.div<{ top: number; left: number }>`
  position: fixed;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  z-index: 1500;
`;
