import { ChevronLeft, ChevronRight } from 'lucide-react';
import * as React from 'react';
import { DayPicker, DropdownProps } from 'react-day-picker';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../select';
import { StyledCalendarChevron, StyledCalendarWrapper } from './style';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({ showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <StyledCalendarWrapper>
      <DayPicker
        showOutsideDays={showOutsideDays}
        className='styled-date-picker'
        classNames={{
          months: 'styled-months',
          month: 'styled-month',
          caption: 'styled-caption',
          caption_label: 'styled-caption-label',
          caption_dropdowns: 'styled-caption-dropdowns',
          nav: 'styled-nav',
          nav_button: 'styled-nav-button',
          nav_button_previous: 'styled-nav-button-previous',
          nav_button_next: 'styled-nav-button-next',
          table: 'styled-table',
          head_row: 'styled-head-row',
          head_cell: 'styled-head-cell',
          row: 'styled-row',
          cell: 'styled-cell',
          day: 'styled-day',
          day_range_end: 'day-range-end',
          day_selected: 'styled-day-Selected',
          day_today: 'styled-day-today',
          day_outside: 'day-outside styled-day-outside',
          day_disabled: 'styled-day-disabled',
          day_range_middle: 'styled-day-range-middle',
          day_hidden: 'styled-day-hidden',
        }}
        components={{
          IconLeft: () => <StyledCalendarChevron as={ChevronLeft} />,
          IconRight: () => <StyledCalendarChevron as={ChevronRight} />,
          Dropdown: props => {
            return <CustomDropdown {...props} />;
          },
        }}
        {...props}
      />
    </StyledCalendarWrapper>
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };

const CustomDropdown = (props: DropdownProps) => {
  const { caption, onChange, children } = props;

  if (children) {
    const options = React.Children.toArray(props.children) as unknown as {
      props: { value: number; children: string };
    }[];

    return (
      <Select
        onValueChange={value =>
          onChange &&
          onChange({
            target: {
              value,
            },
          } as React.ChangeEvent<HTMLSelectElement>)
        }
      >
        <SelectTrigger style={{ height: '36px' }}>
          <SelectValue placeholder={caption} />
        </SelectTrigger>

        <SelectContent style={{ maxHeight: '240px' }}>
          {options.map((option, index) => (
            <SelectItem key={index} value={option.props.value.toString()}>
              {option.props.children}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  }

  return null;
};
