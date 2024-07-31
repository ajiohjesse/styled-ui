import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import * as React from 'react';
import {
  StyledSelectContent,
  StyledSelectIcon,
  StyledSelectIconWrapper,
  StyledSelectItem,
  StyledSelectLabel,
  StyledSelectScrollButton,
  StyledSelectSeperator,
  StyledSelectTrigger,
  StyledSelectViewPort,
} from './style';

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ children, ...props }, ref) => (
  <StyledSelectTrigger ref={ref} {...props}>
    {children}
    <SelectPrimitive.Icon asChild>
      <StyledSelectIcon as={ChevronDown} />
    </SelectPrimitive.Icon>
  </StyledSelectTrigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>((props, ref) => (
  <StyledSelectScrollButton
    as={SelectPrimitive.ScrollUpButton}
    ref={ref}
    {...props}
  >
    <StyledSelectIcon as={ChevronUp} />
  </StyledSelectScrollButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>((props, ref) => (
  <StyledSelectScrollButton
    as={SelectPrimitive.ScrollDownButton}
    ref={ref}
    {...props}
  >
    <StyledSelectIcon as={ChevronDown} />
  </StyledSelectScrollButton>
));
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <StyledSelectContent ref={ref} position={position} {...props}>
      <SelectScrollUpButton />
      <StyledSelectViewPort $position={position}>
        {children}
      </StyledSelectViewPort>
      <SelectScrollDownButton />
    </StyledSelectContent>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>((props, ref) => <StyledSelectLabel ref={ref} {...props} />);
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ children, ...props }, ref) => (
  <StyledSelectItem ref={ref} {...props}>
    <StyledSelectIconWrapper>
      <SelectPrimitive.ItemIndicator>
        <StyledSelectIcon as={Check} />
      </SelectPrimitive.ItemIndicator>
    </StyledSelectIconWrapper>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </StyledSelectItem>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>((props, ref) => <StyledSelectSeperator ref={ref} {...props} />);
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
