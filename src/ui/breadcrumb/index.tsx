import { Slot } from '@radix-ui/react-slot';
import { ChevronRight, MoreHorizontal } from 'lucide-react';
import * as React from 'react';
import {
  StyledBreadcrumbEllipsis,
  StyledBreadcrumbItem,
  StyledBreadcrumbLink,
  StyledBreadcrumbList,
  StyledBreadcrumbPage,
  StyledBreadcrumbSeperator,
} from './styles';

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<'nav'> & {
    separator?: React.ReactNode;
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label='breadcrumb' {...props} />);
Breadcrumb.displayName = 'Breadcrumb';

const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<'ol'>
>((props, ref) => <StyledBreadcrumbList ref={ref} {...props} />);
BreadcrumbList.displayName = 'BreadcrumbList';

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<'li'>
>((props, ref) => <StyledBreadcrumbItem ref={ref} {...props} />);
BreadcrumbItem.displayName = 'BreadcrumbItem';

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<'a'> & {
    asChild?: boolean;
  }
>(({ asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : 'a';

  return <StyledBreadcrumbLink as={Comp} ref={ref} {...props} />;
});
BreadcrumbLink.displayName = 'BreadcrumbLink';

const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<'span'>
>(({ ...props }, ref) => (
  <StyledBreadcrumbPage
    ref={ref}
    role='link'
    aria-disabled='true'
    aria-current='page'
    {...props}
  />
));
BreadcrumbPage.displayName = 'BreadcrumbPage';

const BreadcrumbSeparator = ({
  children,
  ...props
}: React.ComponentProps<'li'>) => (
  <StyledBreadcrumbSeperator role='presentation' aria-hidden='true' {...props}>
    {children ?? <ChevronRight />}
  </StyledBreadcrumbSeperator>
);
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

const BreadcrumbEllipsis = (props: React.ComponentProps<'span'>) => (
  <StyledBreadcrumbEllipsis role='presentation' aria-hidden='true' {...props}>
    <MoreHorizontal className='h-4 w-4' />
    <span className='sr-only'>More</span>
  </StyledBreadcrumbEllipsis>
);
BreadcrumbEllipsis.displayName = 'BreadcrumbElipssis';

export {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
};
