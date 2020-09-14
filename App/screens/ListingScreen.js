import React from "react";
import { FlatList,StyleSheet } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import Colors from "../Config/Colors";

const Listings = [
  {
    id: 1,
    title: "Red Jacket For Sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch In Great Condition",
    price: 1000,
    image: require("../assets/couch.jpg"),
  },
];

const ListingScreen = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={Listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => {
          return (
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              image={item.image}
            />
          );
        }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen:{
    padding:10,
    backgroundColor:Colors.light
  }
})

export default ListingScreen;

