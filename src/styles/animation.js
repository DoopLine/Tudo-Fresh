import { keyframes } from "styled-components";

export const fade = keyframes`
  0% {
    opacity: 0;
}

100% {
    opacity: 1;
  }
`;

export const scaleIn50 = keyframes`
  0% {
    transform: scale3d(0,0,0) translateX(-50%);
  }

  100% {
    transform: scale3d(1,1,1) translateX(-50%);
  }
`;

export const scaleIn = keyframes`
  0% {
    transform: scale3d(0,0,0);
  }

  100% {
    transform: scale3d(1,1,1);
  }
`;
