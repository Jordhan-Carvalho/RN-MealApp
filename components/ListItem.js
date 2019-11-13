import React from "react";
import { View, StyleSheet } from "react-native";

import BodyText from "./BodyText";

const ListItem = props => {
  return (
    <View style={{ ...styles.listItemContainer, ...props.style }}>
      <BodyText>{props.children}</BodyText>
    </View>
  );
};

const styles = StyleSheet.create({
  listItemContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    padding: 10,
    borderWidth: 1
  }
});

export default ListItem;
