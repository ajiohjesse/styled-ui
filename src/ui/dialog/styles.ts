import { fadeIn, fadeOut } from '@/lib/styled-ui/animations';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import styled from 'styled-components';

export const StyledDialogOverlay = styled(DialogPrimitive.Overlay)`
  position: fixed;
  inset: 0;
  z-index: 999;
  background-color: hsla(0, 0%, 0%, 80%);

  &[data-state='open'] {
    animation: ${fadeIn} 100ms linear;
  }

  &[data-state='closed'] {
    animation: ${fadeOut} 100ms linear;
  }
`;

export const StyledDialogContent = styled(DialogPrimitive.Content)`
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

export const StyledDialogHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;

  @media (min-width: 640px) {
    text-align: left;
  }
`;

export const StyledDialogFooter = styled.div`
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

export const StyledDialogTitle = styled(DialogPrimitive.Title)`
  font-size: 1.125rem;
  font-weight: 600;
`;

export const StyledDialogDescription = styled(DialogPrimitive.Description)`
  font-size: 0.875rem;
  color: hsl(${p => p.theme.colors.muted_foreground});
`;

export const StyledDialogClose = styled(DialogPrimitive.Close)`
  position: absolute;
  right: 8px;
  top: 8px;
  border-radius: ${p => p.theme.radius.sm};
  opacity: 0.7;
  transition: opacity 200ms ease;

  &:hover {
    opacity: 1;
  }

  &:focus-visible {
    outline: 2px solid hsl(${p => p.theme.colors.ring});
    outline-offset: 2px;
  }

  &:disabled {
    pointer-events: none;
    opacity: 50%;
  }

  &[data-state='open'] {
    background-color: hsl(${p => p.theme.colors.accent});
    color: hsl(${p => p.theme.colors.muted_foreground});
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;
