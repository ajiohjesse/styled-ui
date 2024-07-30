import { focusCss } from '@/lib/styled-ui';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import styled, { keyframes } from 'styled-components';

const accordionUp = keyframes`
0% { 
  height: var(--radix-accordion-content-height)
}
100% { 
  height: 0
}
`;

const accordionDown = keyframes`
0% {
  height: 0;
}
100% {
  height: var(--radix-accordion-content-height);
}
`;

export const StyledAccordionItem = styled(AccordionPrimitive.Item)`
  border-bottom: 1px solid hsl(${p => p.theme.colors.border});
`;

export const StyledAccordionHeader = styled(AccordionPrimitive.Header)`
  display: flex;
`;

export const StyledAccordionChevron = styled(ChevronDown)`
  height: 1rem;
  width: 1rem;
  flex-shrink: 0;
  transition: transform 200ms;
`;

export const StyledAccordionTrigger = styled(AccordionPrimitive.Trigger)`
  display: flex;
  gap: 8px;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  text-align: start;
  font-weight: 500;
  transition: 150ms;
  border-radius: ${p => p.theme.radius.md};

  &:hover {
    text-decoration: underline;
  }

  &[data-state='open'] {
    svg {
      transform: rotate(180deg);
    }
  }

  ${focusCss}
`;

export const StyledAccordionContent = styled(AccordionPrimitive.Content)`
  overflow: hidden;
  font-size: 0.875rem;
  transition: all 150ms;

  &[data-state='closed'] {
    animation: ${accordionUp} 0.2s ease-out;
  }

  &[data-state='open'] {
    animation: ${accordionDown} 0.2s ease-out;
  }
`;

export const AccordionContentWrapper = styled.div`
  padding-block: 0 1rem;
  padding-inline: 1rem;
`;
