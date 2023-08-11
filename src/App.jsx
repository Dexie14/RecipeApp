import Home from "./pages/Home/Home";
import GetRecipeInfo from "./components/GetRecipeInfo/GetRecipeInfo";
import { Route, Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getRecipe/:id" element={<GetRecipeInfo />} />
      </Routes>
    </>
  )
}

export default App
