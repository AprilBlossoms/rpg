import React from 'react';

interface SvgContainerProps {
  children?: React.ReactNode;
  size: number;
}
export default function SvgContainer({ children, size }: SvgContainerProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidyMid"
      style={{ width: size, height: size, margin: '0 auto' }}
    >
      {children}
    </svg>
  );
}
