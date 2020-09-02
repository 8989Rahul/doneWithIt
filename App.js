import React from "react";
import WelcomScreen from "./App/screens/WelcomScreen";
import ViewImageScreen from "./App/screens/ViewImageScreen";
import Card from "./App/components/Card";
import { View } from "react-native";
import ListingDetailScreen from "./App/screens/ListingDetailScreen";

export default function App() {
  return (
    // <View style={{ backgroundColor: "#f8f4f4", paddingTop: 100, padding: 20 }}>
    // <ListingDetailScreen />
    <ViewImageScreen />

    // </View>
  );
  // <WelcomScreen />;
}

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", alignItems: "center" },
// });
