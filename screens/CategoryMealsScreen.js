import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

// import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = ({ navigation }) => {
  // const catId = navigation.getParam("categoryId");
  // const selectedCat = CATEGORIES.find(cat => cat.id === catId);
  const cat = navigation.getParam("category");

  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen</Text>
      <Text>{cat.title}</Text>
      <Button
        title="Go to meal detail"
        onPress={() => navigation.navigate("MealDetail")}
      />
      <Button
        title="GO BACK"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = navData => {
  const cat = navData.navigation.getParam("category");

  return {
    headerTitle: cat.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMealsScreen;
