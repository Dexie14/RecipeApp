/* eslint-disable react/jsx-key */
import { useState,
 //  useEffect
   } from "react";
// import axios from "axios";
import classes from "./Home.module.css";
import delicious from '../../assets/delicious.jpg'
import chocolateCake from '../../assets/chocolate-cake.jpg'
import tart from '../../assets/tartt.jpg'
import SearchIngredient from '../../components/SearchIngredient/index'
import SearchNutrient from "../../components/searchNutrient";
import RecipeSearch from "../../components/Searches";
// import { useNavigate } from "react-router-dom";
// import {key} from "../../Constant/index";

// import { toast } from "react-toastify";

const Home = () => {

  
  // const navigate = useNavigate();

  const desserts = [
    {
      name: "Strawberry Pie",
      description: "A delicious and refreshing pie made with fresh strawberries.",
      image: tart,
        crossorigin: "anonymous",
    },
    {
      name: "Chocolate Cake",
      description: "A rich and decadent chocolate cake that is perfect for any occasion.",
      image: chocolateCake,
         crossorigin: "anonymous",
    },
    {
      name: "Ulu Vadai",
      description: "A traditional South Indian dessert made with lentils and coconut.",
      image: delicious,
      crossorigin: "anonymous",
    },
    {
      name: "Strawberry Pie",
      description: "A delicious and refreshing pie made with fresh strawberries.",
      image: tart,
        crossorigin: "anonymous",
    },
    {
      name: "Chocolate Cake",
      description: "A rich and decadent chocolate cake that is perfect for any occasion.",
      image: chocolateCake,
       crossorigin: "anonymous",
    },
    {
      name: "Ulu Vadai",
      description: "A traditional South Indian dessert made with lentils and coconut.",
      image: delicious,
       crossorigin: "anonymous",
    },
  ]


  // const [search, setSearch] = useState([]);
  const [searchRecipe, setSearchRecipe] = useState(false);
  const [searchNutrien, setSearchNutrien] = useState(false);
  const [searchIngre, setSearchIngre] = useState(false);

  const searchRecipeTab = () => {
    setSearchRecipe(!searchRecipe)
  }
  const searchNutrienTab = () => {
    setSearchNutrien(!searchNutrien)
  }
  const searchIngreTab = () => {
    setSearchIngre(!searchIngre)
  }

  

  // async function searchRec() {
  //   try {
  //     const res = await axios.get( `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}`)
  //     console.log(res, "grps");
  //     setSearch(res?.data.results);
  //     toast.success(res.message);
  //   } catch (error) {
  //     console.log(error, 'errrr');
  //     // toast.warning(error.message);
  //   }
  // }

  // console.log(search);

  // useEffect(() => {
  //   searchRec()
  // })

 


  return (
    <>
    <div className={classes.App}>
      <h2 style={{cursor: "pointer"}} onClick={() => {
  window.location.reload();
}}>Recipe App</h2>

      <div className={classes.search}style={{display: "flex" , flexWrap: "wrap" , justifyContent: "space-between", width: "70%", margin: "10px auto"}}>
        <button onClick={ () => { searchRecipeTab(); setSearchIngre(false); setSearchNutrien(false) }}>Search Recipes</button>
        <button onClick={ () => { searchNutrienTab(); setSearchIngre(false); setSearchRecipe(false) }}>Search by Nutrients</button>
        <button onClick={() => { searchIngreTab(); setSearchNutrien(false); setSearchRecipe(false) }}>Search by Ingredients</button>
      </div>

      <h3 style={{marginBottom: "20px"}}>Note: You can get recipes information by viewing more on any searched recipe</h3>

      <hr style={{border: "2px solid #007bff", marginBottom: "20px"}}></hr>
      {searchIngre && 
      <SearchIngredient/>}
      {searchNutrien && 
      <SearchNutrient/> }
      {searchRecipe && 
      <RecipeSearch/> }



    
      <h3 >Recipes</h3>

      <div className={classes.card}>
        
        {/* {search.length > 0 ?
        search.map((item) => (
          <div key={item.id}>
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
        )) : */}
        {desserts.map((dessert) => (
          <div key={dessert.name}>
            <img src={dessert.image} alt={dessert.name} />
            <h2>{dessert.name}</h2>
            <p>{dessert.description}</p>
          </div>
        ))} 
      </div>

     

      
    </div>
    </>
  );
};

export default Home