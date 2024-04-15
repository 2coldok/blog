import styled from "styled-components";
import { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    opacity: 0.9;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0.9;
  }
`;

export const MusicSkeletonLoader = styled.div`
  position: fixed;
  top: 60;
  left: 0;
  height: 60px;
  width: 80%; /////////
  border-radius: 1rem;
  border-right: none;
  background-color: #7f8c94;
  transform: translateX(12.5%);
  @media (max-width: 1100px) {
    width: 100%;
    transform: translateX(0);
  }
  animation: ${pulse} 1s ease-in-out infinite;
`;