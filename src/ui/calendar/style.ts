import styled from 'styled-components';
import { baseButtonCss, buttonVariant } from '../button/styles';

export const StyledCalendarWrapper = styled.span`
  .styled-date-picker {
    padding: 8px;
  }

  .styled-months {
    display: flex;
  }

  .styled-caption {
    display: flex;
    position: relative;
    align-items: end;
    justify-content: center;
  }

  .styled-caption-label {
    font-size: 0.875rem;
    font-weight: 500;
  }

  .styled-caption-dropdowns {
    display: flex;
    width: 100%;
    margin-bottom: 8px;

    & > *:last-child {
      margin-left: 8px;
    }

    & ~ .styled-nav {
      margin-bottom: 68px;
    }

    & .styled-caption-label {
      display: none;
    }
  }

  .styled-nav {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    position: static;
  }

  .styled-nav-button {
    ${baseButtonCss}
    ${buttonVariant.outline}

    height: 24px;
    width: 24px;
    padding: 0;

    &:hover {
      opacity: 100%;
    }
  }

  .styled-nav-button-previous {
    position: absolute;
    left: 4px;
  }
  .styled-nav-button-next {
    position: absolute;
    right: 4px;
  }

  .styled-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 4px;
  }

  .styled-head-row {
    display: flex;
    margin-bottom: 4px;
  }

  .styled-head-cell {
    color: hsl(${p => p.theme.colors.muted_foreground});
    border-radius: ${p => p.theme.radius.md};
    width: 39px;
    font-weight: 400;
    font-size: 0.8rem;
  }

  .styled-row {
    display: flex;
    width: 100%;
  }

  .styled-cell {
    height: 39px;
    width: 39px;
    text-align: center;
    font-size: 0.875rem;
    padding: 0;
    position: relative;

    &:has([aria-selected='true'].day-range-end) {
      border-top-right-radius: ${p => p.theme.radius.md};
      border-bottom-right-radius: ${p => p.theme.radius.md};
    }

    &:has([aria-selected='true'].day-outside) {
      background-color: hsla(${p => p.theme.colors.accent}, 0.5);
    }

    &:first-child:has([aria-selected='true']) {
      border-top-left-radius: ${p => p.theme.radius.md};
      border-bottom-left-radius: ${p => p.theme.radius.md};
    }

    &:last-child:has([aria-selected='true']) {
      border-top-right-radius: ${p => p.theme.radius.md};
      border-bottom-right-radius: ${p => p.theme.radius.md};
    }

    &:focus-within {
      position: relative;
      z-index: 20;
    }
  }

  .styled-day {
    ${baseButtonCss}
    ${buttonVariant.ghost}

    height: 32px;
    width: 32px;
    padding: 0;
    font-weight: 400;

    &[aria-selected='true'] {
      opacity: 100%;
    }
  }

  .styled-day-Selected {
    background-color: hsl(${p => p.theme.colors.primary});
    color: hsl(${p => p.theme.colors.primary_foreground});

    &:hover {
      background-color: hsl(${p => p.theme.colors.primary});
      color: hsl(${p => p.theme.colors.primary_foreground});
    }

    &:focus {
      background-color: hsl(${p => p.theme.colors.primary});
      color: hsl(${p => p.theme.colors.primary_foreground});
    }
  }

  .styled-day-today {
    background-color: hsl(${p => p.theme.colors.accent});
    color: hsl(${p => p.theme.colors.accent_foreground});
  }

  .styled-day-outside {
    color: hsl(${p => p.theme.colors.muted_foreground});
    opacity: 50%;

    &[aria-selected='true'] {
      background-color: hsla(${p => p.theme.colors.accent}, 0.5);
      color: hsl(${p => p.theme.colors.muted_foreground});
      opacity: 30%;
    }
  }

  .styled-day-disabled {
    color: hsl(${p => p.theme.colors.muted_foreground});
    opacity: 50%;
  }

  .styled-day-range-middle {
    &[aria-selected='true'] {
      background-color: hsla(${p => p.theme.colors.accent});
      color: hsl(${p => p.theme.colors.accent_foreground});
    }
  }

  .styled-day-hidden {
    visibility: hidden;
  }
`;

export const StyledCalendarChevron = styled.div`
  height: 16px;
  width: 16px;
`;
