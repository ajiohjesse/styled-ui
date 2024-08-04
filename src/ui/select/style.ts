import {
  disabledCss,
  fadeIn,
  fadeOut,
  focusCss,
  shadowCss,
  zoomOut,
} from '@/lib/styled-ui';
import * as SelectPrimitive from '@radix-ui/react-select';
import styled, { css } from 'styled-components';

export const StyledSelectTrigger = styled(SelectPrimitive.Trigger)`
  display: flex;
  height: 40px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-radius: ${p => p.theme.radius.md};
  border: 1px solid hsl(${p => p.theme.colors.input});
  background-color: hsl(${p => p.theme.colors.background});
  padding-inline: 12px;
  padding-block: 8px;
  font-size: 0.875rem;

  &::placeholder {
    color: hsl(${p => p.theme.colors.muted_foreground});
  }

  ${focusCss}
  ${disabledCss}

  span {
    line-clamp: 1;
  }
`;

export const StyledSelectIcon = styled.div`
  width: 16px;
  height: 16px;
`;

export const StyledSelectScrollButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 4px;
  cursor: default;
`;

export const StyledSelectContent = styled(SelectPrimitive.Content)`
  position: relative;
  z-index: 50;
  max-height: 348px;
  min-width: 8rem;
  overflow: hidden;
  border-radius: ${p => p.theme.radius.md};
  border: 1px solid hsl(${p => p.theme.colors.border});
  background-color: hsl(${p => p.theme.colors.popover});
  color: hsl(${p => p.theme.colors.popover_foreground});

  ${shadowCss}

  animation-duration: 100ms;
  animation-timing-function: ease-in-out;

  ${p =>
    p.position === 'popper' &&
    css`
      &[data-side='bottom'] {
        transform: translateY(4px);
      }
      &[data-side='left'] {
        transform: translateX(-4px);
      }
      &[data-side='right'] {
        transform: translateX(4px);
      }
      &[data-side='top'] {
        transform: translateY(-4px);
      }
    `}

  &[data-state='open'] {
    animation-name: ${fadeIn};
  }
  &[data-state='closed'] {
    animation-name: ${fadeOut}, ${zoomOut};
  }
`;

export const StyledSelectViewPort = styled(SelectPrimitive.Viewport)<{
  $position: string;
}>`
  padding: 8px;

  ${p =>
    p.$position === 'popper' &&
    css`
      height: var(--radix-select-trigger-height);
      width: 100%;
      min-width: var(--radix-select-trigger-width);
    `}
`;

export const StyledSelectLabel = styled(SelectPrimitive.Label)`
  padding-block: 6px;
  padding-left: 32px;
  padding-right: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  color: hsl(${p => p.theme.colors.muted_foreground});
`;

export const StyledSelectItem = styled(SelectPrimitive.Item)`
  position: relative;
  display: flex;
  width: 100%;
  cursor: default;
  user-select: none;
  align-items: center;
  border-radius: ${p => p.theme.radius.sm};
  padding-block: 6px;
  padding-right: 8px;
  padding-left: 32px;
  transition: background-color 150ms ease-in-out;

  &:hover {
    background-color: hsl(${p => p.theme.colors.muted});
  }

  &[data-disabled='true'] {
    opacity: 50%;
    pointer-events: none;
  }

  ${focusCss}
`;

export const StyledSelectIconWrapper = styled.span`
  position: absolute;
  left: 8px;
  display: flex;
  height: 14px;
  width: 14px;
  align-items: center;
  justify-content: center;
`;

export const StyledSelectSeperator = styled(SelectPrimitive.Separator)`
  margin-inline: -4px;
  margin-block: 4px;
  height: 1px;
  background-color: hsl(${p => p.theme.colors.muted});
`;
