import React from "react";

import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const CategoryMealsScreen = ({ navigation }) => {
  // const catId = navigation.getParam("categoryId");
  // const selectedCat = CATEGORIES.find(cat => cat.id === catId);

  const cat = navigation.getParam("category");

  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(cat.id) >= 0
  );

  return <MealList listData={displayedMeals} navigation={navigation} />;
};

CategoryMealsScreen.navigationOptions = navData => {
  const cat = navData.navigation.getParam("category");

  return {
    headerTitle: cat.title
  };
};

export default CategoryMealsScreen;
