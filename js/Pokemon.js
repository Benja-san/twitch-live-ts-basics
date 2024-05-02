"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
class Pokemon {
    constructor(name, pkdxNumber, lp = 10) {
        this.level = 5;
        this.atq = 10;
        this.lp = 10;
        this.name = name;
        this.pkdxNumber = pkdxNumber;
        this.lp = lp;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    pokemonPresentation() {
        const pokemonPresentation = `a wild ${this.name} appears, it is level : ${this.level}`;
        return pokemonPresentation;
    }
    attackOponent(defender) {
        const damage = this.atq;
        const lifePoints = defender.lp;
        defender.lp = lifePoints - damage;
    }
}
Pokemon.MAX_LEVEL = 100;
exports.Pokemon = Pokemon;
