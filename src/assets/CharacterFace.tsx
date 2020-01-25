import React from 'react';
import SvgContainer from './SvgContainer';
import * as Head from './Head';
import * as Eyes from './Eyes';
import * as Mouth from './Mouth';

type Mood = 'Super' | 'Happy' | 'Neutral' | 'Angry' | 'Dead';
interface HasLife {
  hp: number;
  maxHp: number;
}
interface PlayerProps {
  character: HasLife;
  size: number;
}

export default function CharacterFace({ size, character }: PlayerProps) {
  switch (getMood(character)) {
    case 'Super':
      return (
        <SvgContainer size={size}>
          <Head.Circular fill="green">
            <Eyes.Beady color="black" />
            <Mouth.Excited stroke="black" fill="white" />
          </Head.Circular>
        </SvgContainer>
      );
    case 'Happy':
      return (
        <SvgContainer size={size}>
          <Head.Circular fill="olive">
            <Eyes.Beady color="black" />
            <Mouth.Smile stroke="black" />
          </Head.Circular>
        </SvgContainer>
      );
    case 'Neutral':
      return (
        <SvgContainer size={size}>
          <Head.Circular fill="yellow">
            <Eyes.Beady color="black" />
            <Mouth.Thinned stroke="black" />
          </Head.Circular>
        </SvgContainer>
      );
    case 'Angry':
      return (
        <SvgContainer size={size}>
          <Head.Circular fill="red">
            <Eyes.Narrowed color="black" />
            <Mouth.Downturned stroke="black" />
          </Head.Circular>
        </SvgContainer>
      );
    case 'Dead':
      return (
        <SvgContainer size={size}>
          <Head.Circular>
            <Eyes.Vacant color="black" />
            <Mouth.Scared stroke="black" />
          </Head.Circular>
        </SvgContainer>
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
