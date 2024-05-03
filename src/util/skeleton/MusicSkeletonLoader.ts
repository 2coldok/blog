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
  width: 100%;
  border-radius: 1rem;
  border-right: none;
  background-color: #7f8c94;
  animation: ${pulse} 1s ease-in-out infinite;
`;
