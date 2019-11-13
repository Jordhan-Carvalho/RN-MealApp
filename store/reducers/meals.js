import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE, SET_FILTERS } from "../actions/types";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
  loading: true,
  error: {}
};

const mealsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        meal => meal.id === payload
      );
      if (existingIndex >= 0) {
        return {
          ...state,
          favoriteMeals: state.favoriteMeals.filter(
            meal => meal.id !== payload
          ),
          loading: false
        };
      } else {
        return {
          ...state,
          favoriteMeals: [
            ...state.favoriteMeals,
            state.meals.find(meal => meal.id === payload)
          ],
          loading: false
        };
      }
    case SET_FILTERS:
      const { filters } = payload;
      const updatedFilteredMeals = state.meals.filter(m => {
        if (filters.glutenFree && !m.isGlutenFree) {
          return false;
        }
        if (filters.lactoseFree && !m.isLactoseFree) {
          return false;
        }
        if (filters.vegetarian && !m.isVegetarian) {
          return false;
        }
        if (filters.vegan && !m.isVegan) {
          return false;
        }
        return true;
      });
      return {
        ...state,
        filteredMeals: updatedFilteredMeals,
        loading: false
      };
    default:
      return state;
  }
};

export default mealsReducer;
