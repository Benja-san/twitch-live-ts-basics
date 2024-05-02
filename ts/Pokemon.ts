export class Pokemon {
  static MAX_LEVEL: number = 100
  private name: string
  public level: number = 5
  public pkdxNumber: number
  public atq: number = 10
  public lp: number = 10

  constructor(name: string, pkdxNumber: number, lp: number = 10) {
    this.name = name
    this.pkdxNumber = pkdxNumber
    this.lp = lp
  }

  getName(): string {
    return this.name
  }

  setName(name: string): void {
    this.name = name
  }

  pokemonPresentation(): string {
    const pokemonPresentation = `a wild ${this.name} appears, it is level : ${this.level}`
    return pokemonPresentation
  }

  attackOponent(defender: Pokemon): void {
    const damage: number = this.atq
    const lifePoints: number = defender.lp
    defender.lp = lifePoints - damage
  }
}
