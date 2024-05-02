import { Pokemon } from "./Pokemon"

console.log("file loaded")

const nidoking: Pokemon = new Pokemon("nidoking", 34)
const raichu: Pokemon = new Pokemon("raichu", 26, 200)

console.log("pokemon max level is : " + Pokemon.MAX_LEVEL)

console.log(nidoking.pokemonPresentation())
console.log(raichu.pokemonPresentation())

nidoking.setName("Henri")
console.log(nidoking.pokemonPresentation())

console.log(`${raichu.getName()} has ${raichu.lp} pv`)

while (nidoking.lp > 0 && raichu.lp > 0) {
  console.log(`${nidoking.getName()} attacks `)
  nidoking.attackOponent(raichu)
  console.log(`${raichu.getName()} has ${raichu.lp} pv`)

  if (raichu.lp > 0) {
    console.log(`${raichu.getName()} attacks `)
    raichu.attackOponent(nidoking)
    console.log(`${nidoking.getName()} has ${nidoking.lp} pv`)
  } else {
    console.log(`${nidoking.getName()} won`)
  }
}
