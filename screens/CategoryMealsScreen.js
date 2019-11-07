import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CategoryMealsScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen</Text>
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMealsScreen;
