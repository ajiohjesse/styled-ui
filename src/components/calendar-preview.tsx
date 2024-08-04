import { Calendar } from '@/ui/calendar';
import { useState } from 'react';
import Section from './section';

const CalendarPreview = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Section title='Calendar'>
      <Calendar />
      <Calendar
        mode='single'
        selected={date}
        onSelect={date => setDate(date)}
        fromYear={1940}
        toYear={new Date().getFullYear()}
        captionLayout='dropdown'
        initialFocus
      />
      <Calendar
        mode='single'
        selected={date}
        onSelect={date => setDate(date)}
        fromYear={1940}
        toYear={new Date().getFullYear()}
        captionLayout='dropdown-buttons'
        initialFocus
      />
    </Section>
  );
};

export default CalendarPreview;
