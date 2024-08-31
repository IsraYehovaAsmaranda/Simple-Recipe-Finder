import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
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

export default function RecipeBody() {
  const [dataMakanan, setDataMakanan] = useState<Meal[]>([]);

  const navigate = useNavigate();

  const navigateToMeal = (mealId: string) => {
    navigate(`/${mealId}`);
  };

  const getSearchParams = () => {
    const params = new URLSearchParams(window.location.search);
    const searchParam = params.get("search");
    if (searchParam) {
      return searchParam;
    }
    return "";
  };

  const getDataMakanan = async () => {
    const searchValue = getSearchParams();
    console.log(searchValue);

    try {
      const getData = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
      );
      const dataMakanan = await getData.json();
      setDataMakanan(dataMakanan.meals);
    } catch (error) {
      console.log(error);
      throw new Error("Terjadi Kesalahan " + error);
    }
  };

  useEffect(() => {
    getDataMakanan();
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-wrap">
        {dataMakanan ? (
          dataMakanan.map((data, index) => (
            <div
              key={index}
              className="flex flex-shrink w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-4"
            >
              <Card
                key={index}
                className="shadow-xl hover:bg-blue-200 group overflow-hidden"
              >
                <CardHeader>
                  <div
                    className="w-full h-64 rounded-lg bg-cover bg-center group-hover:scale-95 transition-all duration-500"
                    style={{ backgroundImage: `url(${data.strMealThumb})` }}
                  ></div>
                  <CardTitle>{data.strMeal}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Makanan ini termasuk kategori {data.strCategory} yang
                    berasal dari {data.strArea}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    className="bg-green-600 hover:bg-green-700"
                    onClick={() => {
                      navigateToMeal(data.idMeal);
                    }}
                  >
                    Lihat Resep
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))
        ) : (
          <div className="w-full text-center">
            <p>Makanan tidak ditemukan</p>
          </div>
        )}
      </div>
    </div>
  );
}
