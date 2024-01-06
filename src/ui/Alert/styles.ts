import styled, { css } from 'styled-components';
import { AlertVariant } from './index';

interface StyledAlertProps {
  $variant: AlertVariant;
}

const defaultAlertCss = css`
  background-color: hsl(${p => p.theme.colors.background});
  color: hsl(${p => p.theme.colors.foreground});
`;

const destructiveAlertCss = css`
  border: 1px solid hsla(${p => p.theme.colors.destructive}, 0.5);
  color: hsl(${p => p.theme.colors.destructive});
  svg {
    color: hsl(${p => p.theme.colors.destructive});
  }
`;

export const StyledAlert = styled.div<StyledAlertProps>`
  position: relative;
  width: 100%;
  border-radius: ${p => p.theme.radius.lg};
  border: 1px solid hsl(${p => p.theme.colors.primary});
  padding: 1rem;

  svg {
    position: absolute;
    left: 1rem;
    top: 1rem;
    color: hsl(${p => p.theme.colors.foreground});
  }

  svg ~ * {
    padding-left: 1.75rem;
  }

  svg + div {
    transform: translateY(-3px);
  }

  ${p => (p.$variant === 'destructive' ? destructiveAlertCss : defaultAlertCss)}
`;

export const StyledAlertTitle = styled.h5`
  margin-bottom: 2px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.025em;
`;

export const StyledAlertDescription = styled.div`
  font-size: 0.875rem;
  margin-top: 8px;
  p {
    line-height: 1.625;
  }
`;
