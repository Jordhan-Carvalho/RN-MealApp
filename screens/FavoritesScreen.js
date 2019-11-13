import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/CustomHeaderButton";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = ({ navigation }) => {
  const favMeals = MEALS.filter(meal => meal.id === "m1" || meal.id === "m2");

  return <MealList listData={favMeals} navigation={navigation} />;
};

FavoritesScreen.navigationOptions = nav => {
  return {
    headerTitle: "Your favorites",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            nav.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};

export default FavoritesScreen;
