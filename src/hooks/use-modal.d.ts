import { JSXElementConstructor } from 'react';

declare module '@/hooks/use-modal' {
  export function useModal(element: React.ReactElement): JSXElementConstructor;
}
