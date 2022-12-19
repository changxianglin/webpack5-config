import { useState, useEffect } from 'react'

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

const Recipes = () => {
  const [recipe, setRecipe] = useState(elvenShieldRecipe)

  return (
    <div>
      <h3>Current Recipe:</h3>
      <button onClick={() => setRecipe(elvenShieldRecipe)}>
        Elven Shied Recipe
      </button>
      <button onClick={() => setRecipe(elvenGauntleShieldRecipe)}>
        Elven Gauntlet Recipe
      </button>

      <ul>
        {
          Object.keys(recipe).map((material) => {
            return (<li key={material}>
              {material}: {recipe[material]}
            </li>)
          })
        }
      </ul>
    </div>
  )
}

export default Recipes