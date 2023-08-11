import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import classes from "../../pages/Home/Home"

import {key} from "../../Constant/index"
import { toast } from "react-toastify";

const RecipeSearch = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();

    const queryParams = new URLSearchParams({
      query,
      number: 10, // You can adjust the number of results to fetch
      apiKey: key,
    });

    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?${queryParams}`;

    try {
      const response = await axios.get(apiUrl);
      const data = response.data.results;
      setSearchResults(data);
      toast.success(response.data.message);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      
      toast.error(error.response.statusText);
    }
  };

  return (
    <div>
      <h3>Search Recipes</h3>
      <form onSubmit={handleSearch}>
        <label htmlFor="query">Search Query:</label>
        <input
          type="text"
          id="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
        />
        <button type="submit">Search</button>
      </form>

      <div className={classes.card}>
        {searchResults.map((item) => (
          <div key={item.id} style={{display: "flex", flexDirection: "column", width:"50%", margin: "20px auto"}}>
          <img src={item.image} alt={item.name} />
          <h2>{item.title}</h2>
          <button
            onClick={() => {
              navigate(`/getRecipe/${item.id}`);
            }}
          >
            View more
          </button>
        </div>
        )) }
      </div>
    </div>
  );
};

export default RecipeSearch;
