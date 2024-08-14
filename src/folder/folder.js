async function getRecipeCommom(id){
    const APIKEY = 'cea5775e8e6340d19ba2df6cd5863531';
    const response2 = await fetch(`https://api.spoonacular.com/recipes/${id}/summary?apiKey=${APIKEY}`)
  return await response2.json() 
  
  }
  async function getRecipeCommom1(id){
    const APIKEY = 'cea5775e8e6340d19ba2df6cd5863531';
    const response2 = await fetch(`https://api.spoonacular.com/recipes/${id}/summary?apiKey=${APIKEY}`)
  return await response2.json() 
  
  }
