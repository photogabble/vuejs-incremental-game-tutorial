export class Colonist
{
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.xp = 0;
    this.skills = {
      mining: 0,
      manufacturing: 0,
      farming: 0,
      science: 0,
    };
    this.inventory = [];
  }

  incrementAge() {
    this.age++;
  }

  incrementXp() {
    this.xp++;
  }

  getInventory() {
    return this.inventory;
  }
}
