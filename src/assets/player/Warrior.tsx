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
    <Head.Circular fill="#fec">
      <Hair.Spikey fill="#f00" />
      <g transform="translate(20, 20) scale(0.8)">
        {character.hp > 0 ? <Eyes.Beady /> : <Eyes.Vacant />}
        <g transform={`translate(0, ${droop})`}>
          {ok ? <Mouth.Smirk /> : <Mouth.Shocked />}
        </g>
      </g>
    </Head.Circular>
  );
}
