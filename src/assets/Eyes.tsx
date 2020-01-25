import React from 'react';

export interface EyesProps {
  color?: string;
}

export function Beady({ color = 'black' }: EyesProps) {
  return (
    <>
      <circle cx={35} cy={50} r={5} fill={color} stroke={color} />
      <circle cx={65} cy={50} r={5} fill={color} stroke={color} />
    </>
  );
}

export function Narrowed({ color = 'black' }: EyesProps) {
  return (
    <>
      <line x1={30} x2={45} y1={45} y2={47} stroke={color} strokeWidth={3} />
      <line x1={55} x2={70} y1={47} y2={45} stroke={color} strokeWidth={3} />
    </>
  );
}

export function Vacant({ color = 'black' }: EyesProps) {
  return (
    <>
      <line x1={30} x2={45} y1={40} y2={55} stroke={color} strokeWidth={3} />
      <line x1={45} x2={30} y1={40} y2={55} stroke={color} strokeWidth={3} />
      <line x1={70} x2={60} y1={45} y2={55} stroke={color} strokeWidth={3} />
      <line x1={60} x2={70} y1={45} y2={55} stroke={color} strokeWidth={3} />
    </>
  );
}
