import { fadeIn, fadeOut } from '@/lib/styled-components/animations';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import styled, { css } from 'styled-components';

export const StyledAlertDialogOverlay = styled(AlertDialogPrimitive.Overlay)`
  position: fixed;
  inset: 0;
  z-index: 999;
  background-color: hsla(0, 0%, 0%, 80%);

  &[data-state='open'] {
    animation: ${fadeIn} 200ms linear;
  }

  &[data-state='closed'] {
    animation: ${fadeOut} 200ms linear;
  }
`;

export const StyledAlertDialogContent = styled(AlertDialogPrimitive.Content)`
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 999;
  display: grid;
  width: 100%;
  max-width: 512px;
  transform: translate(-50%, -50%);
  gap: 1rem;
  border: 1px solid hsl(${p => p.theme.colors.border});
  background-color: hsl(${p => p.theme.colors.background});
  padding: 24px;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
  transition: all 200ms;

  @media (min-width: 640px) {
    border-radius: ${p => p.theme.radius.lg};
  }

  &[data-state='open'] {
    animation: ${fadeIn} 200ms;
  }

  &[data-state='closed'] {
    animation: ${fadeOut} 200ms;
  }
`;

export const StyledAlertDialogHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;

  @media (min-width: 640px) {
    text-align: left;
  }
`;

export const StyledAlertDialogFooter = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 8px;

  button {
    width: 100%;
  }

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: end;

    button {
      width: max-content;
    }
  }
`;

export const StyledAlertDialogTitle = styled(AlertDialogPrimitive.Title)`
  font-size: 1.125rem;
  font-weight: 600;
`;

export const StyledAlertDialogDescription = styled(
  AlertDialogPrimitive.Description,
)`
  font-size: 0.875rem;
  color: hsl(${p => p.theme.colors.muted_foreground});
`;

export const alertDialogCancelCss = css`
  margin-top: 8px;
  @media (min-width: 640px) {
    margin-top: 0;
  }
`;
