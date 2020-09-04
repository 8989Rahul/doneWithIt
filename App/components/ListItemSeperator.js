import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../Config/Colors";

export default function ListItemSeperator() {
  return <View style={styles.seperator} />;
}

const styles = StyleSheet.create({
  seperator: {
    width: "100%",
    height: 1,
    backgroundColor: Colors.light,
  },
});
