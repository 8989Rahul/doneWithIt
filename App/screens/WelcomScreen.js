import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

export default function WelcomScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text>Sell What You Don't Need </Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registereButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  registereButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
});