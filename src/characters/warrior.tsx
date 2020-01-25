import React, { useState } from 'react';
import { PlayerCharacter, SpriteProps } from './types';
import { targetLowestHp } from 'logic/targeting';
import { sword, rush } from 'logic/actions';
import * as Head from 'assets/Head';
import * as Eyes from 'assets/Eyes';
import * as Mouth from 'assets/Mouth';
import * as Hair from 'assets/Hair';

const warrior: PlayerCharacter = {
  type: 'PC',
  name: 'Warrior',
  attackModifier: 3,
  hp: 28,
  maxHp: 28,
  ac: 16,
  chooseTarget: targetLowestHp,
  actionOptions: [
    {
      name: 'Attack',
      action: () => sword,
      getValidTargets: targets =>
        targets.filter(t => t.type === 'NPC' && t.hp > 0)
    },
    {
      name: 'Rush',
      action: () => rush,
      getValidTargets: targets =>
        targets.filter(t => t.type === 'NPC' && t.hp > 0)
    }
  ],
  chooseAction: () => sword,
  sprite({ self }: SpriteProps) {
    let hpRatio = self.hp / self.maxHp;
    let ok = hpRatio > 0.75;
    let maxDroop = 15;
    let droop = maxDroop - maxDroop * hpRatio;
    return (
      <Head.Circular fill="#fec">
        <Hair.Spikey fill="#f00" />
        <g transform="translate(20, 20) scale(0.8)">
          {self.hp > 0 ? <Eyes.Beady /> : <Eyes.Vacant />}
          <g transform={`translate(0, ${droop})`}>
            {ok ? <Mouth.Smirk /> : <Mouth.Shocked />}
          </g>
        </g>
      </Head.Circular>
    );
  }
};

export default warrior;
