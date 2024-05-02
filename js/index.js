"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pokemon_1 = require("./Pokemon");
console.log("file loaded");
const nidoking = new Pokemon_1.Pokemon("nidoking", 34);
const raichu = new Pokemon_1.Pokemon("raichu", 26, 200);
console.log("pokemon max level is : " + Pokemon_1.Pokemon.MAX_LEVEL);
console.log(nidoking.pokemonPresentation());
console.log(raichu.pokemonPresentation());
nidoking.setName("Henri");
console.log(nidoking.pokemonPresentation());
console.log(`${raichu.getName()} has ${raichu.lp} pv`);
while (nidoking.lp > 0 && raichu.lp > 0) {
    console.log(`${nidoking.getName()} attacks `);
    nidoking.attackOponent(raichu);
    console.log(`${raichu.getName()} has ${raichu.lp} pv`);
    if (raichu.lp > 0) {
        console.log(`${raichu.getName()} attacks `);
        raichu.attackOponent(nidoking);
        console.log(`${nidoking.getName()} has ${nidoking.lp} pv`);
    }
    else {
        console.log(`${nidoking.getName()} won`);
    }
}
