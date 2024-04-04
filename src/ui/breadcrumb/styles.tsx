import styled from 'styled-components';

export const StyledBreadcrumbList = styled.ol`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  overflow-wrap: break-word;
  font-size: 0;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: hsl(${p => p.theme.colors.muted_foreground});

  @media (min-width: 640px) {
    gap: 10px;
  }
`;

export const StyledBreadcrumbItem = styled.li`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

export const StyledBreadcrumbLink = styled.a`
  transition: all 200ms ease;
  &:hover {
    color: hsl(${p => p.theme.colors.foreground});
  }
`;

export const StyledBreadcrumbPage = styled.span`
  font-size: 1rem;
  color: hsl(${p => p.theme.colors.foreground});
`;

export const StyledBreadcrumbSeperator = styled.li`
  svg {
    width: 0.875rem;
    height: 0.875rem;
  }
`;

export const StyledBreadcrumbEllipsis = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
`;
