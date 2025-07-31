import React, { useRef, useState } from 'react'
import ClaudeRecipe from './ClaudeRecipe';
import IngredientsList from './IngredientsList';

// Importing API func
import { getRecipeFromMistral } from '../modules/ai';

function Form() {

    const [ingredients,setIngredients] = useState(
        []
    ); //ingredients array with default values

    // this state will store Ai response
    const [recipe, setRecipe] = React.useState("");

    // creating a ref (ref is react property which can be used on any html element but on component we passed as props)
    // create a receipeSection ref so when user click on getRecipe and when ai return response due to ref it auto scrolls to react ref
    const receipeSection = useRef(null);

    function addIngredient(formData){
        const newIngredient = formData.get("ingredient");
        setIngredients(prevIngredient => {
            return [
                ...prevIngredient, //hold copies of old props
                newIngredient //item to add
            ];
        });
    }

    // make it async/awiat func bcz promise is returned and it is Ai response
    async function getRecipe() {
        const generatedRecipe= await getRecipeFromMistral(ingredients); //passing ingredients state array
        setRecipe(generatedRecipe);
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano (add atleast more than 3 ingredients)"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {/* 1- only showing the CaludeRecipe component with listItems if there is something inside ingredients
            state array */}
            {/* if we want to use ternary then simply use same logic but for else return null */}
             {ingredients.length > 0 && <IngredientsList ingredients={ingredients} getRecipe={getRecipe} getRef={receipeSection}/>}

            {/* 3- only shows IngredientsList component when recipeShown value is true */}
            {recipe && <ClaudeRecipe recipe={recipe}/>}
        </main>
    );
}

export default Form;