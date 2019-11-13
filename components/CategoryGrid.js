import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from "react-native";

const CategoryGrid = ({ itemData, navigation }) => {
  let TouchButton = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchButton = TouchableNativeFeedback;
  }

  return (
    <View style={styles.gridItemContainer}>
      <TouchButton
        onPress={() => {
          navigation.navigate("CategoryMeals", {
            category: {
              id: itemData.item.id,
              title: itemData.item.title,
              color: itemData.item.color
            }
          });
        }}
      >
        <View
          style={{
            ...styles.itemContainer,
            ...{ backgroundColor: itemData.item.color }
          }}
        >
          <Text style={styles.title} numberOfLines={2}>
            {itemData.item.title}
          </Text>
        </View>
      </TouchButton>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItemContainer: {
    flex: 1,
    borderRadius: 10,
    elevation: 5,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    margin: 15,
    height: 150
  },
  itemContainer: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,

    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "right"
  }
});

export default CategoryGrid;
