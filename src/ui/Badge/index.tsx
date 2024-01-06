import * as React from 'react';
import { StyledBadge } from './styles';

export type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
}

function Badge({ variant = 'default', ...props }: BadgeProps) {
  return <StyledBadge $variant={variant} {...props} />;
}

export default Badge;
