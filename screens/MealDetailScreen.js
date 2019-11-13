import React, { useEffect, useCallback } from "react";
import { ScrollView, View, Image, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";

import { toggleFavorite } from "../store/actions/meals";
import BodyText from "../components/BodyText";
import ListItem from "../components/ListItem";
import CustomHeaderButton from "../components/CustomHeaderButton";

const MealDetailScreen = ({ navigation }) => {
  const meal = navigation.getParam("item");
  const currentIsFav = useSelector(state =>
    state.mealsReducer.favoriteMeals.some(item => item.id === meal.id)
  );

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(meal.id));
  }, [dispatch, meal.id]);

  useEffect(() => {
    navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    navigation.setParams({ isFav: currentIsFav });
  }, [currentIsFav]);

  return (
    <ScrollView>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <BodyText>{meal.duration}</BodyText>
        <BodyText>{meal.complexity.toUpperCase()}</BodyText>
        <BodyText>{meal.affordability.toUpperCase()}</BodyText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {meal.ingredients.map((item, i) => (
        <ListItem key={i}>{item}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {meal.steps.map((item, i) => (
        <ListItem key={i}>{item}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = navData => {
  const meal = navData.navigation.getParam("item");
  const toggleFav = navData.navigation.getParam("toggleFav");
  const isFav = navData.navigation.getParam("isFav");

  return {
    headerTitle: meal.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName={isFav ? "ios-star" : "ios-star-outline"}
          onPress={toggleFav}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200
  },
  detailsContainer: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around"
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center"
  }
});

export default MealDetailScreen;
