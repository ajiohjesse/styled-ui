import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as React from 'react';
import {
  AccordionContentWrapper,
  StyledAccordionChevron,
  StyledAccordionContent,
  StyledAccordionHeader,
  StyledAccordionTrigger,
} from './styles';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>((props, ref) => <AccordionPrimitive.Item ref={ref} {...props} />);

AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ children, ...props }, ref) => (
  <StyledAccordionHeader>
    <StyledAccordionTrigger ref={ref} {...props}>
      {children}
      <StyledAccordionChevron />
    </StyledAccordionTrigger>
  </StyledAccordionHeader>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ children, ...props }, ref) => (
  <StyledAccordionContent ref={ref} {...props}>
    <AccordionContentWrapper>{children}</AccordionContentWrapper>
  </StyledAccordionContent>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
