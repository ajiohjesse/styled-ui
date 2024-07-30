import { focusCss } from '@/lib/styled-ui';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';
import styled from 'styled-components';
import { disabledCss } from './../../lib/styled-ui/mixins';

export const StyledRadioGroup = styled(RadioGroupPrimitive.Root)`
  display: grid;
  gap: 8px;
`;

export const StyledRadioItem = styled(RadioGroupPrimitive.Item)`
  aspect-ratio: 1/1;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border: 1px solid hsl(${p => p.theme.colors.primary});
  color: hsl(${p => p.theme.colors.primary});

  ${focusCss}
  ${disabledCss}
`;

export const StyledRadioIndicator = styled(RadioGroupPrimitive.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledRadioCircle = styled(Circle)`
  height: 10px;
  width: 10px;
  fill: currentColor;
  color: currentColor;
`;
