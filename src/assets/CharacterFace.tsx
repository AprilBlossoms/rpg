import React from 'react';
import * as Head from './Head';
import * as Eyes from './Eyes';
import * as Mouth from './Mouth';

type Mood = 'Super' | 'Happy' | 'Neutral' | 'Angry' | 'Dead';
interface HasLife {
  hp: number;
  maxHp: number;
}

interface CharacterFaceProps {
  character: HasLife;
}
export default function CharacterFace({ character }: CharacterFaceProps) {
  switch (getMood(character)) {
    case 'Super':
      return (
        <Head.Circular fill="green">
          <Eyes.Beady color="black" />
          <Mouth.Excited stroke="black" fill="white" />
        </Head.Circular>
      );
    case 'Happy':
      return (
        <Head.Circular fill="olive">
          <Eyes.Beady color="black" />
          <Mouth.Smile stroke="black" />
        </Head.Circular>
      );
    case 'Neutral':
      return (
        <Head.Circular fill="yellow">
          <Eyes.Beady color="black" />
          <Mouth.Thinned stroke="black" />
        </Head.Circular>
      );
    case 'Angry':
      return (
        <Head.Circular fill="red">
          <Eyes.Narrowed color="black" />
          <Mouth.Downturned stroke="black" />
        </Head.Circular>
      );
    case 'Dead':
      return (
        <Head.Circular>
          <Eyes.Vacant color="black" />
          <Mouth.Scared stroke="black" />
        </Head.Circular>
      );
  }
}

function getMood(character: HasLife): Mood {
  let hpPercent = (character.hp / character.maxHp) * 100;

  if (hpPercent === 100) return 'Super';
  else if (hpPercent >= 80) return 'Happy';
  else if (hpPercent >= 50) return 'Neutral';
  else if (hpPercent > 0) return 'Angry';
  else return 'Dead';
}
