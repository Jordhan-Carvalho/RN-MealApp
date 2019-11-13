import React from "react";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet } from "react-native";

import MealList from "../components/MealList";

const CategoryMealsScreen = ({ navigation }) => {
  const cat = navigation.getParam("category");

  const availableMeals = useSelector(state => state.mealsReducer.filteredMeals);

  const displayedMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(cat.id) >= 0
  );

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <Text>No meals found, check your filters</Text>
      </View>
    );
  }

  return <MealList listData={displayedMeals} navigation={navigation} />;
};

CategoryMealsScreen.navigationOptions = navData => {
  const cat = navData.navigation.getParam("category");

  return {
    headerTitle: cat.title
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMealsScreen;
