import React from "react";
import { FlatList } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";

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
    <Screen>
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

export default ListingScreen;
