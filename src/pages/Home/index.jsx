/* eslint-disable react/jsx-key */
import { useState,
 //  useEffect
   } from "react";
// import axios from "axios";
import classes from "./Home.module.css";
import SearchIngredient from '../../components/SearchIngredient/index'
import SearchNutrient from "../../components/searchNutrient/searchNutrient";
import RecipeSearch from "../../components/Searches/RecipeSearch";
// import { useNavigate } from "react-router-dom";
// import {key} from "../../Constant/index";

// import { toast } from "react-toastify";

const Home = () => {

  
  // const navigate = useNavigate();

  const desserts = [
    {
      name: "Strawberry Pie",
      description: "A delicious and refreshing pie made with fresh strawberries.",
      image: "https://img.freepik.com/free-photo/beautifully-decorted-bakery-sweets_23-2149367826.jpg?w=1060&t=st=1691588294~exp=1691588894~hmac=e74ffeab98833128241e669f39a0edcd4b332b439463aff206b7210ca89f02d7",
      crossorigin: "anonymous",
    },
    {
      name: "Chocolate Cake",
      description: "A rich and decadent chocolate cake that is perfect for any occasion.",
      image: "https://img.freepik.com/free-photo/dessert-fruitcake_144627-10487.jpg?w=1060&t=st=1691588335~exp=1691588935~hmac=55e5bae598e9744da31e1711ed45f9a20b7f18219194155e4bddc91ad927f9de",
      crossorigin: "anonymous",
    },
    {
      name: "Ulu Vadai",
      description: "A traditional South Indian dessert made with lentils and coconut.",
      image: "https://img.freepik.com/free-photo/meat-dish-with-vegetables_144627-18092.jpg?w=1060&t=st=1691588351~exp=1691588951~hmac=23d69c0e3d4e7384317e190b77ce4031b6c0fdd69f755995dc8ccb9c4887cd51",
      crossorigin: "anonymous",
    },
    {
      name: "Strawberry Pie",
      description: "A delicious and refreshing pie made with fresh strawberries.",
      image: "https://img.freepik.com/free-photo/beautifully-decorted-bakery-sweets_23-2149367826.jpg?w=1060&t=st=1691588294~exp=1691588894~hmac=e74ffeab98833128241e669f39a0edcd4b332b439463aff206b7210ca89f02d7",
      crossorigin: "anonymous",
    },
    {
      name: "Chocolate Cake",
      description: "A rich and decadent chocolate cake that is perfect for any occasion.",
      image: "https://img.freepik.com/free-photo/dessert-fruitcake_144627-10487.jpg?w=1060&t=st=1691588335~exp=1691588935~hmac=55e5bae598e9744da31e1711ed45f9a20b7f18219194155e4bddc91ad927f9de",
      crossorigin: "anonymous",
    },
    {
      name: "Ulu Vadai",
      description: "A traditional South Indian dessert made with lentils and coconut.",
      image: "https://img.freepik.com/free-photo/meat-dish-with-vegetables_144627-18092.jpg?w=1060&t=st=1691588351~exp=1691588951~hmac=23d69c0e3d4e7384317e190b77ce4031b6c0fdd69f755995dc8ccb9c4887cd51",
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