import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/recipefinder/Hero";
import RecipeBody from "./components/recipefinder/RecipeBody";
import MealPage from "./pages/MealPage";
import "../app/globals.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:mealId" element={<MealPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <RecipeBody />
    </>
  );
}

export default App;
