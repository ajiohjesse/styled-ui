import { fadeIn, fadeOut, shadowCss } from '@/lib/styled-ui';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import styled from 'styled-components';

export const StyledPopoverContent = styled(PopoverPrimitive.Content)`
  z-index: 50;
  width: 18rem; /* 288px */
  border-radius: ${p => p.theme.radius.md};
  background-color: hsl(${p => p.theme.colors.popover});
  color: hsl(${p => p.theme.colors.popover_foreground});
  padding: 1rem;
  outline: none;

  ${shadowCss}

  &[data-state='open'] {
    animation: ${fadeIn} 200ms ease;
  }

  &[data-state='close'] {
    animation: ${fadeOut} 200ms ease;
  }
`;
