import { rotate } from '@/lib/styled-ui';
import styled, { RuleSet, css } from 'styled-components';
import { ButtonSize, ButtonVariant } from './index';

interface StyledButtonProps {
  $variant: ButtonVariant;
  $size: ButtonSize;
  $loading: boolean;
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
  --loading-color: hsl(${p => p.theme.colors.primary_foreground});
  background-color: hsl(${p => p.theme.colors.primary});
  color: hsl(${p => p.theme.colors.primary_foreground});
  &:hover {
    background-color: hsl(${p => p.theme.colors.primary}, 0.9);
  }
`;

const destructiveButtonCss = css`
  --loading-color: hsl(${p => p.theme.colors.destructive_foreground});
  background-color: hsl(${p => p.theme.colors.destructive});
  color: hsl(${p => p.theme.colors.destructive_foreground});
  &:hover {
    background-color: hsl(${p => p.theme.colors.destructive}, 0.9);
  }
`;

const outlineButtonCss = css`
  --loading-color: hsl(${p => p.theme.colors.accent_foreground});
  border: 1px solid hsl(${p => p.theme.colors.border});
  background-color: hsl(${p => p.theme.colors.background});
  color: hsl(${p => p.theme.colors.accent_foreground});
  &:hover {
    background-color: hsl(${p => p.theme.colors.accent});
  }
`;

const secondaryButtonCss = css`
  --loading-color: hsl(${p => p.theme.colors.secondary_foreground});
  background-color: hsl(${p => p.theme.colors.secondary});
  color: hsl(${p => p.theme.colors.secondary_foreground});
  &:hover {
    background-color: hsla(${p => p.theme.colors.secondary}, 0.8);
  }
`;

const ghostButtonCss = css`
  --loading-color: hsl(${p => p.theme.colors.primary});
  &:hover {
    background-color: hsl(${p => p.theme.colors.accent});
    color: hsl(${p => p.theme.colors.accent_foreground});
  }
`;

const linkButtonCss = css`
  --loading-color: hsl(${p => p.theme.colors.primary});
  color: hsl(${p => p.theme.colors.primary});
  text-underline-offset: 4px;
  &:hover {
    text-decoration: underline;
  }
`;

const loadingButtonCss = css`
  pointer-events: none;
  color: transparent;
  --spinner-size: 16px;
  &::selection {
    color: transparent;
  }

  &::after {
    position: absolute;
    display: block;
    content: '';
    width: var(--spinner-size);
    height: var(--spinner-size);
    border-radius: var(--spinner-size);
    border: 2px solid var(--loading-color);
    border-top-color: transparent;
    animation: ${rotate} 600ms linear infinite;
  }
`;

const buttonSize: Record<ButtonSize, RuleSet<object>> = {
  default: normalSizeButtonCss,
  icon: iconSizeButtonCss,
  lg: largeSizeButtonCss,
  sm: smallSizeButtonCss,
};

const buttonVariant: Record<ButtonVariant, RuleSet<object>> = {
  default: defaultButtonCss,
  secondary: secondaryButtonCss,
  destructive: destructiveButtonCss,
  ghost: ghostButtonCss,
  outline: outlineButtonCss,
  link: linkButtonCss,
};

export const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
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

  ${({ $variant }) => buttonVariant[$variant]}
  ${({ $size }) => buttonSize[$size]}

  ${p => p.$loading && loadingButtonCss}
`;
