//import {meal, idrev} from './meal.js'


    async function getRecipe(meal){
      const APIKEY = 'cea5775e8e6340d19ba2df6cd5863531'
      const response1 = await fetch (`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${APIKEY}&ingredients=${meal}`)
        return await response1.json();
 
    }
    const  mealResult =await getRecipe('lemon')//.then((data)=> {data})// = data console.log(data))
    
  console.log(mealResult[0].id)
 //console.log (meal[1])
 const container = document.querySelector('#container');

 /* function getDataFromPromise(mealResult){
  console.log(mealResult.length);
  for (let i =0; i < mealResult.length; i++){


  }
 } */


//let superResult= getDataFromPromise(meal)



async function getRecipeCommom(id){
  const APIKEY = 'cea5775e8e6340d19ba2df6cd5863531';
  const response2 = await fetch(`https://api.spoonacular.com/recipes/${id}/summary?apiKey=${APIKEY}`)
return await response2.json() 

}


let idSR = mealResult[1].id;

 let idNow = await getRecipeCommom(idSR)//.then((res) =>Object.values(res))

console.log(idNow.summary)



 const listOfMeal = document.createElement('ul');
 listOfMeal.classList.add('list');
 //listOfMeal.textContent = meal;
 console.log(listOfMeal)
 container.append(listOfMeal)

 let listOfMealItem = document.createElement('li')
 listOfMealItem.classList.add ('listItem')
 listOfMeal.append(listOfMealItem)

 let listOfMealImage = document.createElement('img');
 listOfMealImage.classList.add('listImage')
 listOfMealItem.append(listOfMealImage);
 listOfMealImage.src = mealResult[1].image

 let listOfMealTitle=  document.createElement('h2')
 listOfMealTitle.classList.add('listTitle');
 listOfMealItem.prepend(listOfMealTitle)
 listOfMealTitle.textContent = [mealResult[1].title]

 let listOfMealRecipe=  document.createElement('p')
 listOfMealRecipe.classList.add('listRecipe');
 listOfMealItem.append(listOfMealRecipe)
// listOfMealRecipe.textContent = idNow.then(res=>res.summary)
 listOfMealRecipe.innerHTML= idNow.summary
 






