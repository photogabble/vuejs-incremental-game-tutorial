import {Building} from "./building";

export class Mine extends Building
{
  constructor ()
  {
    super();
    this.maxOccupancy = 25;
  }
}