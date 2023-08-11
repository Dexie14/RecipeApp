
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {key} from "../../Constant/index"
import classes from "../../pages/Home/Home"
const GetRecipeInfo = () => {

    const {id} = useParams()

    const [recipe, setRecipe] = useState([])

    const getRecipe = async () => {
        try {
            const res = await axios.get( `https://api.spoonacular.com/recipes/${id}/information?apiKey=${key}`)
            console.log(res, "grps");
            setRecipe(res?.data);
          } catch (error) {
            console.log(error, 'errrr');
          }
        }

        console.log(recipe);

        useEffect(() => {
            getRecipe()
        })





  return (
    <>
    <h3>GetRecipeInfo</h3>
    <div className={classes.get}>
        {/* {recipe?.map((recipe) => ( */}
          <div key={recipe.id}>
            <h2>{recipe.title}</h2>
            <img src={recipe.image} />
            <p>{recipe.summary ? recipe.summary.replace(/<[^>]*>/g, '') : ''}</p>
          </div>
        {/* ))} */}
      </div>
    </>
  )
}

export default GetRecipeInfo