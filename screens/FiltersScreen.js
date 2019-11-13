import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Switch, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/CustomHeaderButton";
import Colors from "../constants/Colors";

// Component for switch
const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        value={props.isSomething}
        onValueChange={newValue => props.setIsSomething(newValue)}
        trackColor={{ true: Colors.primary, false: Colors.secondary }}
        thumbColor={Platform.OS === "android" ? Colors.primary : ""}
      />
    </View>
  );
};

const FiltersScreen = ({ navigation }) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactose, setIsLactose] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  //to pass to the header on .navigationOpetions
  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactose,
      vegan: isVegan,
      vegetarian: isVegetarian
    };

    console.log(appliedFilters);
  }, [isVegetarian, isVegan, isGlutenFree, isLactose]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);
  //end to pass to the header on .navigationOpetions

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        isSomething={isGlutenFree}
        setIsSomething={setIsGlutenFree}
        label={"Gluten-free"}
      />
      <FilterSwitch
        isSomething={isLactose}
        setIsSomething={setIsLactose}
        label={"Lactose-free"}
      />
      <FilterSwitch
        isSomething={isVegan}
        setIsSomething={setIsVegan}
        label={"Vegan"}
      />
      <FilterSwitch
        isSomething={isVegetarian}
        setIsSomething={setIsVegetarian}
        label={"Vegetarian"}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = nav => {
  return {
    headerTitle: "Filter Meals",
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
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={nav.navigation.getParam("save")}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center"
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center"
  }
});

export default FiltersScreen;
