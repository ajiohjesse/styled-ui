import { addDays, format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { DateRange } from 'react-day-picker';
import { Calendar } from '../calendar';
import {
  StyledCalendarIcon,
  StyledDatePickerTrigger,
} from '../date-picker/style';
import { Popover, PopoverContent, PopoverTrigger } from '../popover';

interface DateRangePickerProps {
  dateRange?: DateRange | undefined;
  setDateRange?: (date: DateRange | undefined) => void;
}

export default function DateRangePicker(props: DateRangePickerProps) {
  const {
    dateRange = {
      from: new Date(),
      to: addDays(new Date(), 5),
    },
    setDateRange,
  } = props;

  return (
    <div style={{ display: 'grid', gap: '8px' }}>
      <Popover>
        <PopoverTrigger asChild>
          <StyledDatePickerTrigger
            $date={!!dateRange}
            id='date'
            variant={'outline'}
          >
            <StyledCalendarIcon as={CalendarIcon} />
            {dateRange?.from ? (
              dateRange.to ? (
                <>
                  {format(dateRange.from, 'LLL dd, y')} -{' '}
                  {format(dateRange.to, 'LLL dd, y')}
                </>
              ) : (
                format(dateRange.from, 'LLL dd, y')
              )
            ) : (
              <span>Pick a date</span>
            )}
          </StyledDatePickerTrigger>
        </PopoverTrigger>
        <PopoverContent
          style={{ width: 'auto', padding: '20px 0 0 0' }}
          align='start'
        >
          <Calendar
            initialFocus
            mode='range'
            defaultMonth={dateRange?.from}
            selected={dateRange}
            onSelect={setDateRange}
            numberOfMonths={1}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
