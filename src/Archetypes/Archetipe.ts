import { EnergyType } from '../Energy';

export default abstract class Archetype {
  public _special: number;
  public _cost: number;
  constructor(
    public _name: string,
  ) {
    this._cost = 0;
    this._special = 0;
  }

  get name():string {
    return this._name;
  }

  get special():number {
    return this._special;
  }

  get cost():number {
    return this._cost;
  }

  static createdArchetypeInstances():number {
    throw new Error('Not implemented');
  }

  abstract get energyType():EnergyType;
}