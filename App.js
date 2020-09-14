import React from "react";
import AppTextInput from "./App/components/AppTextInput";
import Screen from "./App/components/Screen";
import Colors from "./App/Config/Colors";

export default function App() {
  return <Screen>
    <AppTextInput placeholder="Username" icon="email"  />
  </Screen>
}

