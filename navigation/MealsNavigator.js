import React from "react";
import { Platform, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import Colors from "../constants/Colors";
import FiltersScreen from "../screens/FiltersScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

const defaultNavStackOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Colors.primary
    },
    headerTitleStyle: {
      fontFamily: "open-sans-bold"
    },
    headerBackTitleStyle: {
      fontFamily: "open-sans"
    },
    headerTintColor: "white",
    headerTitle: "MEAL APP"
  }
};

const MealsNavStack = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen
      // navigationOptions: {
      //   headerTitle: "Meal Category"
      // }
    },
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen
  },
  defaultNavStackOptions
);

const FavNavStack = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
  },
  defaultNavStackOptions
);

const FiltersNavStack = createStackNavigator(
  {
    Filters: FiltersScreen
  },
  {
    // navigationOptions: {
    //   drawerLabel: "LASdo"
    // },
    ...defaultNavStackOptions
  }
);

const tabConfig = {
  Meals: {
    screen: MealsNavStack,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primary,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans" }}>Meals</Text>
        ) : (
          "Meals"
        )
    }
  },
  Favorites: {
    screen: FavNavStack,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.secondary,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans" }}>Favorites</Text>
        ) : (
          "Favorites"
        )
    }
  }
};

const MealsTabNav =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabConfig, {
        activeColor: "white",
        shifting: true
      })
    : createBottomTabNavigator(tabConfig, {
        tabBarOptions: {
          labelStyle: {
            fontFamily: "open-sans"
          },
          activeTintColor: Colors.secondary
        }
      });

const MainNavDrawer = createDrawerNavigator(
  {
    Main: { screen: MealsTabNav, navigationOptions: { drawerLabel: "Meals" } },
    Filters: FiltersNavStack
  },
  {
    contentOptions: {
      activeLabelStyle: { color: Colors.secondary },
      labelStyle: { fontFamily: "open-sans", color: "white" }
    },
    drawerBackgroundColor: Colors.primary,
    drawerWidth: "35%"
  }
);

export default createAppContainer(MainNavDrawer);
