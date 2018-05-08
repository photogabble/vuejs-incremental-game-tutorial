export class Building {
  constructor() {
    this.occupants = [];
    this.maxOccupancy = 0;
    this.level = 1;
  }

  addOccupant(colonist) {
    if ((this.currentOccupancy + 1) > this.maxOccupancy) {
      return false;
    }
    this.occupants.push(colonist);
    return true;
  }

  removeOccupant(colonist) {
    this.occupants = this.occupants.filter(item => item !== colonist);
  }

  get currentOccupancy() {
    return this.occupants.length;
  }
}