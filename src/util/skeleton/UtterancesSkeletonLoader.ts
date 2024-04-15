import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
    opacity: 0.9;
  }
  50% {
    opacity: 0.1;
  }
  100% {
    opacity: 0.9;
  }
`;

export const UtterancesSkeletonLoader = styled.div`
  display: flex;
  border-radius: 1rem;
  width: 100%;
  height: 200px;
  background-color: #7f8c94;
  animation: ${pulse} 2s ease-in-out infinite;
`;