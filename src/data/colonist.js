export class Colonist {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.xp = 0;
    this.level = 1;
  }

  incrementAge(i = 1) {
    this.age += i;
  }

  incrementXp() {
    this.xp += this.actionXp();
  }

  incrementLevel() {
    if (this.xp >= this.nextLevelXp) {
      this.level++;
    }
  }

  mineAmount() {
    return Math.floor(-40 + (this.actionXp()^1.2));
  }

  actionXp() {
    return (45 + (5 * this.level));
  }

  difficulty() {
    if (this.level <= 28) {
      return 0;
    }
    if (this.level === 29) {
      return 1;
    }
    if (this.level === 30) {
      return 3;
    }
    if (this.level === 31) {
      return 6;
    }
    if (this.level >= 32) {
      return 5 * (this.level - 30);
    }
  }

  reductionFactor() {
    if (this.level <= 10) {
      return 1;
    }
    if (this.level >= 11 && this.level <= 27) {
      return (1-(this.level - 10)/100);
    }
    if (this.level >= 28 && this.level <= 59) {
      return 0.82;
    }
    if (this.level > 60) {
      return 1;
    }
  }

  get nextLevelXp() {
    return ((8 * this.level) + this.difficulty()) * this.actionXp() * this.reductionFactor();
  }
}

let colonistCount = 0;

export function ColonistFactory() {
  let c = new Colonist((colonistCount % 2 ? 'Jane' : 'John') + ' ' + colonistCount);
  colonistCount++;
  return c;
}