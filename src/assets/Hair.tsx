import React from 'react';

interface HairProps {
  stroke?: string;
  fill?: string;
}

export function Spikey({ stroke = 'black', fill = 'black' }: HairProps) {
  return (
    <path
      stroke={stroke}
      fill={fill}
      d="M 20 40 
         q -10 -15 0 -30 l 12 10 
         l 5 -15 l 5 15 
         L 50 0 l 8 20
         l 5 -15 l 5 15 
         l 12 -10 Q 90 25 80 40 
         q -30 -20 -60 0
         Z"
    />
  );
}
