import React from 'react';
import * as Head from 'assets/Head';
import * as Eyes from 'assets/Eyes';
import * as Mouth from 'assets/Mouth';
import * as Hair from 'assets/Hair';
import { PlayerSpriteProps } from './types';

export default function Warrior({ character }: PlayerSpriteProps) {
  let hpRatio = character.hp / character.maxHp;
  let ok = hpRatio > 0.75;
  let maxDroop = 15;
  let droop = maxDroop - maxDroop * hpRatio;

  return (
    <>
      <g transform="" stroke="black" fill="red">
        <path
          d="M 42 60 
              q 20 20 -20 40
              q -20 -20 20 -40
              Z"
          fill="black"
        />
        <path
          d="M 58 60 
              q -20 20 20 40
              q 20 -20 -20 -40
              Z"
          fill="black"
        />
        <path
          d="M 64 43 
             l 8 -2 
             c 40 -20 -10 -20 0 -4
             z"
          fill="#FEC"
        />
        <circle r={30} cx={50} cy={55} />
        <path
          d="M 57 52 
             l 8 -2 
             c 40 -20 -10 -20 0 -4
             z"
          fill="#FEC"
        />
      </g>
      <g transform="translate(30, 0) scale(0.4)">
        <Head.Circular fill="#fec">
          <Hair.Spikey fill="#f00" />
          <g transform="translate(20, 20) scale(0.8)">
            {character.hp > 0 ? <Eyes.Beady /> : <Eyes.Vacant />}
            <g transform={`translate(0, ${droop})`}>
              {ok ? <Mouth.Smirk /> : <Mouth.Shocked />}
            </g>
          </g>
        </Head.Circular>
      </g>
    </>
  );
}
