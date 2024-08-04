import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import styled, { css } from 'styled-components';
import Button from '../button';
import { Calendar } from '../calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../popover';

interface DatePickerProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  fromYear?: number;
  toYear?: number;
}

const DatePicker = (props: DatePickerProps) => {
  const {
    date,
    setDate,
    fromYear = 1940,
    toYear = new Date().getFullYear(),
  } = props;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <StyledTrigger variant={'outline'} $date={!!date}>
          <StyledCalendarIcon as={CalendarIcon} />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </StyledTrigger>
      </PopoverTrigger>
      <PopoverContent style={{ width: 'auto', padding: 0 }} align='start'>
        <Calendar
          mode='single'
          selected={date}
          onSelect={setDate}
          fromYear={fromYear}
          toYear={toYear}
          captionLayout='dropdown'
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;

const StyledTrigger = styled(Button)<{ $date: boolean }>`
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

const StyledCalendarIcon = styled.div`
  margin-right: 8px;
  height: 16px;
  width: 16px;
`;
