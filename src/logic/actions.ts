import { d } from './utility';
import { Action, Character, ActionResult } from './types';

const bite: Action = {
  accuracy: 0,
  miss(attacker, target) {
    return `${attacker.name} tried to bite ${target.name}, but missed.`;
  },
  hit(attacker, target, damage) {
    return `${attacker.name} viciously bit ${
      target.name
    } for ${damage} damage.`;
  },
  damage(attacker) {
    return d(4) + d(4) + attacker.attackModifier;
  }
};

const claw: Action = {
  accuracy: 0,
  miss(attacker, target) {
    return `${attacker.name} tried to claw ${target.name}, but missed.`;
  },
  hit(attacker, target, damage) {
    return `${attacker.name} clawed the shit out of ${
      target.name
    } for ${damage} damage.`;
  },
  damage(attacker) {
    return d(6) + d(6) + attacker.attackModifier;
  }
};

const leer: Action = {
  accuracy: 0,
  miss(attacker, target) {
    return `${attacker.name} tried to leer at ${target.name}, but ${
      target.name
    } wasn't paying attention.`;
  },
  hit(attacker, target, damage) {
    return `${attacker.name} leered menacingly at ${
      target.name
    }.  Somehow, it caused ${damage} damage.`;
  },
  damage(attacker) {
    return attacker.attackModifier;
  }
};

const sword: Action = {
  accuracy: 0,
  miss(attacker, target) {
    return `${attacker.name} swung a sword at ${target.name}, but missed.`;
  },
  hit(attacker, target, damage) {
    return `${attacker.name} slashed ${target.name} for ${damage} damage.`;
  },
  damage(attacker) {
    return d(8) + attacker.attackModifier;
  }
};

const rush: Action = {
  accuracy: -2,
  miss(attacker, target) {
    return `${attacker.name} rushed at ${target.name}, but missed.`;
  },
  hit(attacker, target, damage) {
    return `${attacker.name} slashed ${target.name} for ${damage} damage.`;
  },
  damage(attacker) {
    return (d(8) + attacker.attackModifier) * 3;
  }
};

export { bite, claw, leer, sword, rush };

export function performAction(
  actor: Character,
  target: Character,
  action: Action
): ActionResult {
  var result: any = {
    killedTarget: false,
    actor,
    target
  };

  if (action.accuracy === 'Guaranteed') {
    result.roll = null;
    result.isHit = true;
    result.isCrit = false;
  } else {
    result.roll = d(20) + action.accuracy;
    result.isCrit = result.roll === 20;
    result.isHit =
      result.isCrit || result.roll + actor.attackModifier >= target.ac;
  }

  if (result.isHit) {
    result.damage = action.damage(actor, target);
    if (result.isCrit) {
      result.damage = result.damage * 2;
    }

    result.message = action.hit(actor, target, result.damage);
  } else {
    result.message = action.miss(actor, target);
  }

  return result;
}
