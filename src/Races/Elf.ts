import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints:number;
  private static _calledQuantity = 0;

  constructor(name:string, dexterity:number) {
    super(name, dexterity);

    this._name = name;
    this._dexterity = dexterity;
    this._maxLifePoints = 99;
    Elf._calledQuantity += 1;
  }

  static createdRacesInstances() {
    return Elf._calledQuantity;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}