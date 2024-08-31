import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Hero from "../components/recipefinder/Hero";

interface Meal {
  idMeal: string;
  strMeal: string;
  strDrinkAlternate: string | null;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string | null;
  strYoutube: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strIngredient16: string;
  strIngredient17: string;
  strIngredient18: string;
  strIngredient19: string;
  strIngredient20: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  strMeasure16: string;
  strMeasure17: string;
  strMeasure18: string;
  strMeasure19: string;
  strMeasure20: string;
  strSource: string | null;
  strImageSource: string | null;
  strCreativeCommonsConfirmed: string | null;
  dateModified: string | null;
}

export default function MealPage() {
  const [dataMakanan, setDataMakanan] = useState<Meal | undefined>(undefined);

  const { mealId } = useParams<{ mealId: string }>();

  const dataMeal = async () => {
    const fetchData = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    );
    const jsonData = await fetchData.json();
    setDataMakanan(jsonData.meals[0]);
  };

  useEffect(() => {
    dataMeal();
    console.log(dataMakanan);
  }, []);

  return (
    <div className="mealpage">
      <Hero />
      <div className="container mx-auto mt-10 grid lg:grid-cols-2 gap-4">
        <div className="h-full">
          <Card className="shadow-xl">
            <CardHeader>
              <div
                className="w-full h-64 rounded-lg bg-cover bg-center group-hover:scale-95 transition-all duration-500"
                style={{ backgroundImage: `url(${dataMakanan?.strMealThumb})` }}
              ></div>
              <CardTitle>Instruksi Pembuatan {dataMakanan?.strMeal}</CardTitle>
            </CardHeader>
            <CardContent>
              {dataMakanan?.strInstructions}
            </CardContent>
            <CardFooter>Footer</CardFooter>
          </Card>
        </div>
        <div className="grid grid-rows-2 gap-4">
          <div className="">
            <Card className="shadow-xl hover:bg-blue-200">
              <CardHeader>
                <CardTitle>{dataMakanan?.strMeal}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Makanan ini termasuk kategori {dataMakanan?.strCategory} yang
                  berasal dari {dataMakanan?.strArea}
                </p>
              </CardContent>
              <CardFooter>Footer</CardFooter>
            </Card>
          </div>
          <div className="">
            <Card className="shadow-xl hover:bg-blue-200">
              <CardHeader>
                <CardTitle>{dataMakanan?.strMeal}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Makanan ini termasuk kategori {dataMakanan?.strCategory} yang
                  berasal dari {dataMakanan?.strArea}
                </p>
              </CardContent>
              <CardFooter>Footer</CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
