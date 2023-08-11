/* eslint-disable react/jsx-key */

import { useState } from "react";
import { NutrientList } from "../../Constant/index";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import classes from "../../pages/Home/Home"

import {key} from "../../Constant/index"
import { toast } from "react-toastify";


const SearchNutrient = () => {
  const navigate = useNavigate();

  const [ingredientInputs, setIngredientInputs] = useState([
    { ingredient: "", quantity: "" },
  ]);
  // const [minCarbs, setMinCarbs] = useState("");
  // const [maxCarbs, setMaxCarbs] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleIngredientChange = (index, key, value) => {
    const updatedInputs = [...ingredientInputs];
    updatedInputs[index][key] = value;
    setIngredientInputs(updatedInputs);
  };

//   const handleAddIngredient = () => {
//     setIngredientInputs([
//       ...ingredientInputs,
//       { ingredient: "", quantity: "" },
//     ]);
//   };
  const handleAddIngredient = () => {
    setIngredientInputs((prevInputs) => [
      ...prevInputs,
      { ingredient: "", quantity: "" },
    ]);
  };

  const handleRemoveIngredient = (index) => {
    setIngredientInputs((prevInputs) => {
      const updatedInputs = [...prevInputs];
      updatedInputs.splice(index, 1);
      return updatedInputs;
    });
  };
//   const handleRemoveIngredient = (index) => {
//     const updatedInputs = [...ingredientInputs];
//     updatedInputs.splice(index, 1);
//     setIngredientInputs(updatedInputs);
//   };

  const handleSearch = async (event) => {
    event.preventDefault();

    const queryParams = new URLSearchParams({
      apiKey: key,
      ...ingredientInputs.reduce((acc, input) => {
        if (input.ingredient && input.quantity) {
          acc[`${input.ingredient}`] = input.quantity;
          acc[`${input.ingredient}`] = input.quantity; 
        }
        return acc;
      }, {}),
    });

    // ingredientInputs.forEach((input) => {
    //   if (input.ingredient && input.quantity) {
    //     // queryParams.append(` ${input.ingredient} `, ` ${input.quantity}`);
    //     queryParams.append("ingredients", `${input.ingredient},${input.quantity}`);
    //   }
    // });

    const apiUrl = `https://api.spoonacular.com/recipes/findByNutrients?${queryParams}`;

    try {
      const response = await axios.get(apiUrl);
      const data = response.data;
      setSearchResults(data);
      
      toast.success(response.data.message);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      
      toast.error(error.response.statusText);
    }
  };

  console.log(searchResults);

  return (
    <>
      {/* searchNutrients */}

      <h3>Recipe Search by Nutrient</h3>
      <form onSubmit={handleSearch}>
        {/* <label htmlFor="minCarbs">Minimum Carbs:</label>
        <input
          style={{ marginRight: "15px", marginLeft: "5px" }}
          type="number"
          id="minCarbs"
          value={minCarbs}
          onChange={(e) => setMinCarbs(e.target.value)}
          required
        />
        <label htmlFor="maxCarbs">Maximum Carbs:</label>
        <input
          style={{ marginRight: "15px", marginLeft: "5px" }}
          type="number"
          id="maxCarbs"
          value={maxCarbs}
          onChange={(e) => setMaxCarbs(e.target.value)}
          required
        /> */}

        <h4>Select Nutrient and Quantity in Numbers</h4>
        {ingredientInputs.map((input, index) => (
          <div key={index} style={{margin: "20px"}}>
            <select
              value={input.ingredient}
              onChange={(e) =>
                handleIngredientChange(index, "ingredient", e.target.value)
              }
            >
              {NutrientList.map((item) => (
                <option value={item.value}>{item.label}</option>
              ))}
            </select>
            <input
              style={{ marginRight: "15px", marginLeft: "5px" }}
              type="number"
              placeholder="Quantity"
              value={input.quantity}
              onChange={(e) =>
                handleIngredientChange(index, "quantity", e.target.value)
              }
            />
            <button type="button" onClick={() => handleRemoveIngredient(index)}>
              Remove
            </button>
          </div>
        ))}
 
        <button type="button" onClick={handleAddIngredient} style={{ marginRight: "15px", marginLeft: "5px" }}>
          Add Ingredient
        </button>
        <button type="submit">Search</button>
      </form>

      <div className={classes.card}>
        {searchResults.map((recipe) => (
          <div key={recipe.id} style={{display: "flex", flexDirection: "column", width:"50%", margin: "20px auto"}}>
            <h2>{recipe.title}</h2>
            <p>Carbs: {recipe.carbs}</p>
            <p>Protein: {recipe.protein}</p>
            <img src={recipe.image} />
            <button
              onClick={() => {
                navigate(`/getRecipe/${recipe.id}`);
              }}
            >
              View more
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchNutrient;
