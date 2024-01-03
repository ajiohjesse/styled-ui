import styled, { css } from 'styled-components';
import { ButtonSize, ButtonVariant } from './index';

interface StyledButtonProps {
  $variant: ButtonVariant;
  $size: ButtonSize;
}

const smallSizeButtonCss = css`
  height: 2.25rem;
  padding-inline: 0.75rem;
`;

const largeSizeButtonCss = css`
  height: 2.75rem;
  padding-inline: 2rem;
`;

const iconSizeButtonCss = css`
  height: 2.25rem;
  width: 2.5rem;
`;

const normalSizeButtonCss = css`
  height: 40px;
  padding: 0.5rem 1rem;
`;

const defaultButtonCss = css`
  background-color: hsl(${p => p.theme.colors.primary});
  color: hsl(${p => p.theme.colors.primary_foreground});
  &:hover {
    background-color: hsl(${p => p.theme.colors.primary}, 0.9);
  }
`;

const destructiveButtonCss = css`
  background-color: hsl(${p => p.theme.colors.destructive});
  color: hsl(${p => p.theme.colors.destructive_foreground});
  &:hover {
    background-color: hsl(${p => p.theme.colors.destructive}, 0.9);
  }
`;

const outlineButtonCss = css`
  border: 1px solid hsl(${p => p.theme.colors.border});
  background-color: hsl(${p => p.theme.colors.background});
  &:hover {
    background-color: hsl(${p => p.theme.colors.accent});
    color: hsl(${p => p.theme.colors.accent_foreground});
  }
`;

const secondaryButtonCss = css`
  background-color: hsl(${p => p.theme.colors.secondary});
  color: hsl(${p => p.theme.colors.secondary_foreground});
  &:hover {
    background-color: hsla(${p => p.theme.colors.secondary}, 0.8);
  }
`;

const ghostButtonCss = css`
  &:hover {
    background-color: hsl(${p => p.theme.colors.accent});
    color: hsl(${p => p.theme.colors.accent_foreground});
  }
`;

const linkButtonCss = css`
  color: hsl(${p => p.theme.colors.primary});
  text-underline-offset: 4px;
  &:hover {
    text-decoration: underline;
  }
`;

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  width: max-content;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: ${p => p.theme.radius.md};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid hsl(${p => p.theme.colors.ring});
    outline-offset: 2px;
  }

  &:disabled {
    pointer-events: none;
    opacity: 50%;
  }

  ${({ $variant }) =>
    $variant === 'destructive'
      ? destructiveButtonCss
      : $variant === 'ghost'
        ? ghostButtonCss
        : $variant === 'secondary'
          ? secondaryButtonCss
          : $variant === 'outline'
            ? outlineButtonCss
            : $variant === 'link'
              ? linkButtonCss
              : defaultButtonCss}

  ${({ $size }) =>
    $size === 'icon'
      ? iconSizeButtonCss
      : $size === 'sm'
        ? smallSizeButtonCss
        : $size === 'lg'
          ? largeSizeButtonCss
          : normalSizeButtonCss}
`;
