import { focusCss } from '@/lib/styled-ui';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import { forwardRef } from 'react';
import styled from 'styled-components';

const Checkbox = forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>((props, ref) => (
  <StyledCheckbox ref={ref} {...props}>
    <StyledCheckboxIndicator>
      <StyledCheck />
    </StyledCheckboxIndicator>
  </StyledCheckbox>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export default Checkbox;

const StyledCheckbox = styled(CheckboxPrimitive.Root)`
  --checkbox-size: 20px;

  height: var(--checkbox-size);
  width: var(--checkbox-size);
  flex-shrink: 0;
  border-radius: ${p => p.theme.radius.md};
  border: 1px solid hsl(${p => p.theme.colors.primary});

  &:disabled {
    cursor: not-allowed;
    opacity: 50%;
  }

  &[data-state='checked'] {
    background-color: hsl(${p => p.theme.colors.primary});
    color: hsl(${p => p.theme.colors.primary_foreground});
  }

  ${focusCss}
`;

const StyledCheckboxIndicator = styled(CheckboxPrimitive.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: currentColor;
`;

const StyledCheck = styled(Check)`
  height: var(--checkbox-size);
  width: var(--checkbox-size);
`;
