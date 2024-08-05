import styled, { RuleSet, css } from 'styled-components';
import { BadgeVariant } from './index';

interface StyledBadgeProps {
  $variant: BadgeVariant;
}

const defaultBadgeCss = css`
  border-color: transparent;
  background-color: hsl(${p => p.theme.colors.primary});
  color: hsl(${p => p.theme.colors.primary_foreground});
  &:hover {
    background-color: hsla(${p => p.theme.colors.primary}, 80%);
  }
`;

const secondaryBadgeCss = css`
  border-color: transparent;
  background-color: hsl(${p => p.theme.colors.secondary});
  color: hsl(${p => p.theme.colors.secondary_foreground});
  &:hover {
    background-color: hsla(${p => p.theme.colors.secondary}, 80%);
  }
`;

const destructiveBadgeCss = css`
  border-color: transparent;
  background-color: hsl(${p => p.theme.colors.destructive});
  color: hsl(${p => p.theme.colors.destructive_foreground});
  &:hover {
    background-color: hsla(${p => p.theme.colors.destructive}, 80%);
  }
`;

const outlineBadgeCss = css`
  color: hsl(${p => p.theme.colors.foreground});
`;

const badgeVariant: Record<BadgeVariant, RuleSet<object>> = {
  default: defaultBadgeCss,
  secondary: secondaryBadgeCss,
  destructive: destructiveBadgeCss,
  outline: outlineBadgeCss,
};

export const StyledBadge = styled.div<StyledBadgeProps>`
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  border: 1px solid hsl(${p => p.theme.colors.border});
  padding: 2px 10px;
  font-size: 0.75rem;
  font-weight: 600;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  cursor: default;

  &:focus {
    outline: 1px solid hsl(${p => p.theme.colors.ring});
    outline-offset: 2px;
  }

  ${({ $variant }) => badgeVariant[$variant]}
`;
