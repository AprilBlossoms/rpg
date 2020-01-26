import React from 'react';
import * as Head from 'assets/Head';
import * as Eyes from 'assets/Eyes';
import * as Mouth from 'assets/Mouth';
import { PlayerSpriteProps } from './types';

export default function Wildling({ character }: PlayerSpriteProps) {
  return (
    <Head.Circular fill="#fec">
      <g transform="translate(20, 20) scale(0.8)">
        {character.hp > 0 ? (
          <>
            <Eyes.Narrowed />
            <Eyes.Beady />
          </>
        ) : (
          <Eyes.Vacant />
        )}
        <Mouth.Thinned stroke="black" />
      </g>
    </Head.Circular>
  );
}
