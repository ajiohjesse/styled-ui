import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '../calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../popover';
import { StyledCalendarIcon, StyledDatePickerTrigger } from './style';

interface DatePickerProps {
  date?: Date | undefined;
  setDate?: (date: Date | undefined) => void;
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
        <StyledDatePickerTrigger variant={'outline'} $date={!!date}>
          <StyledCalendarIcon as={CalendarIcon} />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </StyledDatePickerTrigger>
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
