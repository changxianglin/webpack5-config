const elvenShieldRecipe = {
  leatherStrips: 2,
  ironIngote: 1,
  refinedMoondstone: 4,
}

const elvenGauntleShieldRecipe = {
  ...elvenShieldRecipe,
  leather: 1,
  refinedMoondstone: 4,
}

console.log(elvenShieldRecipe)
console.log(elvenGauntleShieldRecipe)