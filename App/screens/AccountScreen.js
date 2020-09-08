import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import Colors from "../Config/Colors";
import Icon from "../components/Icon";

const menuItems = [
  {
    title: "My Listing",
    icon: {
      name: "format-list-bulleted",
      backgroundcolor: Colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundcolor: Colors.secondary,
    },
  },
];

const AccountScreen = () => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Rahul Daghale"
          subTitle="daghalerahul0@gmail.com"
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.container} style={{ backgroundColor: "yellow" }}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => {
            return (
              <ListItem
                title={item.title}
                IconComponent={
                  <Icon
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundcolor}
                  />
                }
              />
            );
          }}
        />
      </View>
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: Colors.light,
  },
});
