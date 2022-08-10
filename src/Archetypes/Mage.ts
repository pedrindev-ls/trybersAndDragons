import { EnergyType } from '../Energy';
import Archetype from './Archetipe';

export default class Mage extends Archetype {
  private _energyType:EnergyType;
  private static _calledTimes = 0;

  constructor(name:string) {
    super(name);

    this._name = name;
    this._energyType = 'mana';
    Mage._calledTimes += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage._calledTimes;
  }
}