import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const navigateToOrigin = async () => {
    navigate("/");
  };

  const getSelectedMeal = async () => {
    const fetchData = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    );
    const jsonData = await fetchData.json();
    const finalData = jsonData.meals[0];
    setDataMakanan(finalData);
  };

  useEffect(() => {
    getSelectedMeal();
  }, []);

  return (
    <div className="mealpage">
      <div className="container mx-auto mt-10">
        <Button
          className="bg-blue-600 hover:bg-blue-800"
          onClick={navigateToOrigin}
        >
          <GoArrowLeft />
          Go Back
        </Button>
      </div>
      <div className="container mx-auto my-10 grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
        <div className="h-full">
          <Card className="shadow-xl h-full">
            <CardHeader>
              <div
                className="w-full h-64 rounded-lg bg-cover bg-center"
                style={{ backgroundImage: `url(${dataMakanan?.strMealThumb})` }}
              ></div>
              <CardTitle>How to make {dataMakanan?.strMeal}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              {dataMakanan?.strInstructions}
            </CardContent>
            <CardFooter className="mt-auto">
              <a
                href={dataMakanan?.strSource!}
                target="_blank"
                className="text-primary hover:underline underline-offset-4"
              >
                Link Sumber
              </a>
            </CardFooter>
          </Card>
        </div>
        <div className="grid grid-rows-2 gap-4">
          <div className="">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle>Tutorial Video</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative overflow-hidden pb-[56.25%]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/c-GePPbJrBk?si=O22QJFgEPc5q1I6M"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle>
                  Ingredients to make {dataMakanan?.strMeal}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc ml-4">
                  {Array.from({ length: 20 }, (_, i) => {
                    const ingredientKey = `strIngredient${i + 1}` as keyof Meal;
                    const measureKey = `strMeasure${i + 1}` as keyof Meal;
                    const ingredient = dataMakanan?.[ingredientKey];
                    const measure = dataMakanan?.[measureKey];

                    return ingredient ? (
                      <li key={ingredientKey}>
                        {measure && `${measure} `}
                        {ingredient}
                      </li>
                    ) : null;
                  })}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
