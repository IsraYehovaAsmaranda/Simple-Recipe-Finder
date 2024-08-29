import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function RecipeBody() {
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

  const [dataMakanan, setDataMakanan] = useState<Meal[]>([]);

  const getDataMakanan = async () => {
    const getData = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
    const dataMakanan = await getData.json();
    setDataMakanan(dataMakanan.meals);
  };

  useEffect(() => {
    getDataMakanan();
    console.log(dataMakanan);
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-wrap">
        {dataMakanan.length > 0 ? (
          dataMakanan.map((data, index) => (
            <div key={index} className="flex flex-shrink w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-4">
              <Card key={index}>
                <CardHeader>
                  <img
                    src={data.strMealThumb}
                    className="w-full h-1/4"
                    alt="Gambar Makanan"
                  />
                  <CardTitle>{data.strMeal}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Makanan ini termasuk kategori {data.strCategory} yang berasal dari {data.strArea}</p>
                </CardContent>
                <CardFooter>
                  <Button onClick={getDataMakanan}>Lihat Resep</Button>
                </CardFooter>
              </Card>
            </div>
          ))
        ) : (
          <div className="w-full text-center">
            <p>Makanan yang dicari tidak ditemukan</p>
          </div>
        )}
      </div>
    </div>
  );
}
