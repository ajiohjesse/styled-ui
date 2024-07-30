import styled, { css, keyframes } from 'styled-components';

export const StyledInputOtp = styled.span`
  .styled-otp {
    &:disabled {
      cursor: not-allowed;
    }
  }

  .styled-container {
    display: flex;
    align-items: center;
    gap: 4px;

    &:has(:disabled) {
      opacity: 50%;
    }
  }
`;

export const StyledOtpGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledOtpSlot = styled.div<{ $active: boolean }>`
  position: relative;
  display: flex;
  height: 40px;
  width: 40px;
  align-items: center;
  justify-content: center;
  border-block-width: 1px;
  border-right-width: 1px;
  border-color: hsl(${p => p.theme.colors.input});
  font-size: 0.875rem;
  transition: color 200ms ease;

  &:first-child {
    border-left-width: 1px;
    border-top-left-radius: ${p => p.theme.radius.md};
    border-bottom-left-radius: ${p => p.theme.radius.md};
  }

  &:last-child {
    border-right-width: 1px;
    border-top-right-radius: ${p => p.theme.radius.md};
    border-bottom-right-radius: ${p => p.theme.radius.md};
  }

  ${p =>
    p.$active &&
    css`
      z-index: 10;
      outline: 2px solid hsl(${p => p.theme.colors.ring});
      outline-offset: 2px;
    `}
`;

const caretBlink = keyframes`
0%, 70%, 100% { opacity: 1 };
20%, 50% { opacity: 0 };
`;

export const StyledInputCaret = styled.div`
  pointer-events: none;
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    height: 16px;
    width: 1px;
    background-color: hsl(${p => p.theme.colors.foreground});
    animation: ${caretBlink} 1.25s ease-out infinite;
  }
`;
