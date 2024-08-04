import styled, { css } from 'styled-components';
import Button from '../button';

export const StyledDatePickerTrigger = styled(Button)<{ $date: boolean }>`
  width: 100%;
  justify-content: start;
  text-align: left;
  font-weight: 400;

  ${p =>
    !p.$date &&
    css`
      color: hsl(${p => p.theme.colors.muted_foreground});
    `}
`;

export const StyledCalendarIcon = styled.div`
  margin-right: 8px;
  height: 16px;
  width: 16px;
`;
