import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";

const renderGridItem = itemData => {
  return (
    <View style={styles.gridItemContainer}>
      <Text>{itemData.item.title}</Text>
    </View>
  );
};

const CategoriesScreen = ({ navigation }) => {
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  gridItemContainer: {
    flex: 1,
    margin: 15,
    height: 150
  }
});

export default CategoriesScreen;
