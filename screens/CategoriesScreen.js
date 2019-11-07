import React from "react";
import { StyleSheet, FlatList } from "react-native";

import CategoryGrid from "../components/CategoryGrid";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = itemData => {
    return <CategoryGrid itemData={itemData} navigation={navigation} />;
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories"
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoriesScreen;
