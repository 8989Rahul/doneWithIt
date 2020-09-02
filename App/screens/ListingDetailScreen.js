import React from "react";
import { StyleSheet, View, Image } from "react-native";
import AppText from "../components/AppText";
import colors from "../Config/Colors";
import ListItem from "../components/ListItem";

export default function ListingDetailScreen() {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Rahul Daghle"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: { padding: 20 },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.secondary,
    marginVertical: 10,
  },
  title: {
    fontWeight: "500",
    fontSize: 24,
  },
  userContainer: {
    marginVertical: 40,
  },
});
