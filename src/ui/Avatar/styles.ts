import * as AvatarPrimitive from '@radix-ui/react-avatar';
import styled from 'styled-components';

export const StyledAvater = styled(AvatarPrimitive.Root)`
  position: relative;
  display: flex;
  height: 40px;
  width: 40px;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 100%;
`;

export const StyledAvatarImage = styled(AvatarPrimitive.Image)`
  aspect-ratio: 1/1;
  width: 100%;
  height: 100%;
`;

export const StyledAvatarFallback = styled(AvatarPrimitive.Fallback)`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-color: hsl(${p => p.theme.colors.muted});
`;
