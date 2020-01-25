import React from 'react';
import { PlayerCharacter } from './types';
import { getRandomItem } from 'logic/utility';
import { targetRandom } from 'logic/targeting';
import { bite, leer, claw } from 'logic/actions';
import * as Head from 'assets/Head';
import * as Mouth from 'assets/Mouth';
import * as Eyes from 'assets/Eyes';

const wildling: PlayerCharacter = {
  type: 'PC',
  name: 'Wildling',
  attackModifier: 1,
  hp: 21,
  maxHp: 21,
  ac: 16,
  actionOptions: [
    {
      name: 'Thrash',
      action: () => getRandomItem([bite, claw]),
      getValidTargets: targets =>
        targets.filter(t => t.type === 'NPC' && t.hp > 0)
    },
    {
      name: 'Leer',
      action: () => leer,
      getValidTargets: targets =>
        targets.filter(t => t.type === 'NPC' && t.hp > 0)
    }
  ],
  chooseTarget: targetRandom,
  chooseAction: () => getRandomItem([bite, leer, leer, claw]),
  sprite({ self }) {
    return (
      <Head.Circular fill="#fec">
        <g transform="translate(20, 20) scale(0.8)">
          {self.hp > 0 ? (
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
};

export default wildling;
