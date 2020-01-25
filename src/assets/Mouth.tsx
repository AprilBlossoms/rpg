import React from 'react';

export interface MouthProps {
  stroke?: string;
  fill?: string;
}

export function Excited({ fill = 'transparent', stroke }: MouthProps) {
  return (
    <path
      d="m 30 70 q 20 10 40 0 q -20 30 -40 0"
      fill={fill}
      stroke={stroke}
      strokeWidth={3}
    />
  );
}

export function Smirk({ stroke = 'black' }: MouthProps) {
  return (
    <path
      d="M 30 70 
         c 0 0 50 5 40 -5"
      fill="transparent"
      stroke={stroke}
      strokeWidth={3}
    />
  );
}

export function Smile({ stroke = 'black' }: MouthProps) {
  return (
    <path
      d="m 30 70 q 20 20 40 0"
      fill="transparent"
      stroke={stroke}
      strokeWidth={3}
    />
  );
}

export function Thinned({ stroke = 'black' }: MouthProps) {
  return (
    <path
      d="m 30 70 q 0 0 40 0"
      fill="transparent"
      stroke={stroke}
      strokeWidth={3}
    />
  );
}

export function Downturned({ stroke = 'black' }: MouthProps) {
  return (
    <path
      d="m 30 70 q 20 -5 40 0"
      fill="transparent"
      stroke={stroke}
      strokeWidth={3}
    />
  );
}

export function Shocked({ stroke = 'black', fill = 'black' }: MouthProps) {
  return (
    <circle cx={50} cy={70} r={6} fill={fill} stroke={stroke} strokeWidth={1} />
  );
}

export function Scared({ stroke = 'black' }: MouthProps) {
  return (
    <path
      d={`m 30 70 ${squiggle(5, 40, 10)}`}
      fill="transparent"
      stroke={stroke}
      strokeWidth={3}
    />
  );
}

function squiggle(segments: number, width: number, magnitude: number) {
  let commands: string[] = [];

  for (var i = 0; i < segments; i++) {
    var handleX = width / segments / 2;
    var handleY = i % 2 ? magnitude : magnitude * -1;
    var endX = width / segments;
    var endY = 0;
    commands.push(`q ${handleX} ${handleY} ${endX} ${endY}`);
  }
  return commands.join(' ');
}
