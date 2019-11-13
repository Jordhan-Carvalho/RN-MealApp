import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import MealItem from "./MealItem";

const MealList = ({ listData, navigation }) => {
  const renderMealItem = itemData => {
    return <MealItem itemData={itemData} navigation={navigation} />;
  };

  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={listData}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MealList;
