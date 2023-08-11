import  { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import classes from "../../pages/Home/Home"
import {key} from "../../Constant/index"
import { toast } from "react-toastify";

function SearchIngredient() {

    const navigate = useNavigate(); 
  const [ingredientsInput, setIngredientsInput] = useState('');
  const [numberInput, setNumberInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();

    const ingredients = ingredientsInput.split(',').map(item => item.trim());
    const number = parseInt(numberInput);

    const queryParams = new URLSearchParams({
      ingredients: ingredients.join(','),
      number: number,
      apiKey: key,
    });

    const apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?${queryParams}`;

    try {
      const response = await axios.get(apiUrl);
      const data = response.data;
      setSearchResults(data);
      
      toast.success(response.data.message);
    } catch (error) {
      console.error('Error fetching recipes:', error);
      
      toast.error(error.response.statusText);
    }
  };

  return (
    <div>
      <h4>Recipe Search by Ingredients</h4>
      <form onSubmit={handleSearch}>
        <label htmlFor="ingredients">Ingredients (comma-separated):</label>
        <input
        style={{marginRight:"15px", marginLeft: "5px"}}
          type="text"
          id="ingredients"
          value={ingredientsInput}
          onChange={(e) => setIngredientsInput(e.target.value)}
          required
        />

        <label htmlFor="number">Number of Results:</label>
        <input
        
        style={{marginRight:"15px", marginLeft: "5px"}}
          type="number"
          id="number"
          value={numberInput}
          onChange={(e) => setNumberInput(e.target.value)}
          required
        />

        <button type="submit">Search</button>
      </form>

      <div className={classes.card}>
        {searchResults.map((recipe) => (
          <div key={recipe.id} style={{display: "flex", flexDirection: "column", width:"50%", margin: "20px auto"}}>
            <h2>{recipe.title}</h2>
            <img src={recipe.image} />
            <button onClick={() => {navigate(`/getRecipe/${recipe.id}`)}}>View more</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchIngredient;
