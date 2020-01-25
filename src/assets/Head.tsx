import React from 'react';

interface FaceProps {
  fill?: string;
  stroke?: string;
  children: React.ReactNode;
}

export function Circular({
  hair = 'Bald',
  fill = 'transparent',
  stroke = 'black',
  children
}: FaceProps) {
  return (
    <>
      <circle
        r={38}
        cx={50}
        cy={60}
        fill={fill}
        stroke={stroke}
        strokeWidth={1}
      />
      {children}
    </>
  );
}
