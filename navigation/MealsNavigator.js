import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Colors from "../constants/Colors";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const MealsNavigator = createStackNavigator(
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
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary
      },
      headerTintColor: "white",
      headerTitle: "MEAL APP"
    }
  }
);

export default createAppContainer(MealsNavigator);
