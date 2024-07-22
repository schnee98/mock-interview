import { BACKGROUND } from "shared/constants";
import styled, { css, keyframes } from "styled-components";

export const dropAnimation = keyframes`
  0% {
    top: -50px;
    opacity: 1;
  }
  75% {
    top: calc(50% - 25px);
    opacity: 1;
  }
  100% {
    top: calc(50% - 25px);
    opacity: 0;
  }
`;

export const fillBackground = keyframes`
  0% {
    width: 0;
    height: 100vh;
    opacity: 1;
    ${BACKGROUND}
  }
  100% {
    width: 100vw;
    height: 100vh;
    opacity: 1;
    ${BACKGROUND}
  }
`;

export const headerAnimation = keyframes`
0% {
    text-shadow: -1px 1px #eee, -2px 2px #eee, -3px 3px #eee, -4px 4px #eee, -5px 5px #eee, -6px 6px #ddd, -7px 7px #ddd,
      -8px 8px #ddd, -9px 9px #ddd, -10px 10px #ddd;
  }
  10% {
    text-shadow: -1px 1px #ddd, -2px 2px #eee, -3px 3px #eee, -4px 4px #eee, -5px 5px #eee, -6px 6px #eee, -7px 7px #ddd,
      -8px 8px #ddd, -9px 9px #ddd, -10px 10px #ddd;
  }
  20% {
    text-shadow: -1px 1px #ddd, -2px 2px #ddd, -3px 3px #eee, -4px 4px #eee, -5px 5px #eee, -6px 6px #eee, -7px 7px #eee,
      -8px 8px #ddd, -9px 9px #ddd, -10px 10px #ddd;
  }
  30% {
    text-shadow: -1px 1px #ddd, -2px 2px #ddd, -3px 3px #ddd, -4px 4px #eee, -5px 5px #eee, -6px 6px #eee, -7px 7px #eee,
      -8px 8px #eee, -9px 9px #ddd, -10px 10px #ddd;
  }
  40% {
    text-shadow: -1px 1px #ddd, -2px 2px #ddd, -3px 3px #ddd, -4px 4px #ddd, -5px 5px #eee, -6px 6px #eee, -7px 7px #eee,
      -8px 8px #eee, -9px 9px #eee, -10px 10px #ddd;
  }
  50% {
    text-shadow: -1px 1px #ddd, -2px 2px #ddd, -3px 3px #ddd, -4px 4px #ddd, -5px 5px #ddd, -6px 6px #eee, -7px 7px #eee,
      -8px 8px #eee, -9px 9px #eee, -10px 10px #eee;
  }
  60% {
    text-shadow: -1px 1px #eee, -2px 2px #ddd, -3px 3px #ddd, -4px 4px #ddd, -5px 5px #ddd, -6px 6px #ddd, -7px 7px #eee,
      -8px 8px #eee, -9px 9px #eee, -10px 10px #eee;
  }
  70% {
    text-shadow: -1px 1px #eee, -2px 2px #eee, -3px 3px #ddd, -4px 4px #ddd, -5px 5px #ddd, -6px 6px #ddd, -7px 7px #ddd,
      -8px 8px #eee, -9px 9px #eee, -10px 10px #eee;
  }
  80% {
    text-shadow: -1px 1px #eee, -2px 2px #eee, -3px 3px #eee, -4px 4px #ddd, -5px 5px #ddd, -6px 6px #ddd, -7px 7px #ddd,
      -8px 8px #ddd, -9px 9px #eee, -10px 10px #eee;
  }
  90% {
    text-shadow: -1px 1px #eee, -2px 2px #eee, -3px 3px #eee, -4px 4px #eee, -5px 5px #ddd, -6px 6px #ddd, -7px 7px #ddd,
      -8px 8px #ddd, -9px 9px #ddd, -10px 10px #eee;
  }
  100% {
    text-shadow: -1px 1px #eee, -2px 2px #eee, -3px 3px #eee, -4px 4px #eee, -5px 5px #eee, -6px 6px #ddd, -7px 7px #ddd,
      -8px 8px #ddd, -9px 9px #ddd, -10px 10px #ddd;
  }
`;

export const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeOutAnimation = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(30px);
  }
`;

export const FadeContent = styled.div<{ order: number; $isFadingOut: boolean; $delay?: number }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  opacity: ${({ $isFadingOut }) => ($isFadingOut ? css`1` : css`0`)};
  animation: ${({ $isFadingOut, order, $delay }) =>
    $isFadingOut
      ? css`
          ${fadeOutAnimation} 1s calc(${order * 0.5}s) forwards
        `
      : css`
          ${fadeInAnimation} 1s calc(${order * 0.5}s + ${$delay || 0}s) forwards
        `};
`;
