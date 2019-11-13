import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  ImageBackground
} from "react-native";
import { useSelector } from "react-redux";

import BodyText from "./BodyText";

const MealItem = ({ itemData: { item }, navigation }) => {
  const isFav = useSelector(state =>
    state.mealsReducer.favoriteMeals.some(m => m.id === item.id)
  );

  let TouchButton = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= "21") {
    TouchButton = TouchableNativeFeedback;
  }

  return (
    <View style={styles.mealItemContainer}>
      <TouchButton
        onPress={() =>
          navigation.navigate("MealDetail", {
            item,
            isFav
          })
        }
      >
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: item.imageUrl }}
              style={styles.bgImg}
            >
              <View style={styles.titleContainer}>
                <Text numberOfLines={1} style={styles.title}>
                  {item.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <BodyText>{item.duration}</BodyText>
            <BodyText>{item.complexity.toUpperCase()}</BodyText>
            <BodyText>{item.affordability.toUpperCase()}</BodyText>
          </View>
        </View>
      </TouchButton>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItemContainer: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    marginBottom: 5
  },
  mealRow: {
    flexDirection: "row"
  },
  mealHeader: {
    height: "85%"
  },
  mealDetail: {
    height: "15%",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center"
  },
  bgImg: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end"
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 5
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: "white",
    textAlign: "center"
  }
});

export default MealItem;
