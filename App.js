import React from "react";
import AppPicker from "./App/components/AppPicker";
import Screen from "./App/components/Screen";

const categories= [
  {  label:"Furniture",value:1 },
  {  label:"Clothing",value:2 },
  {  label:"Cameras",value:3 },

]

export default function App() {
  return <Screen>
    <AppPicker items={categories} placeholder="Category" icon="apps"  />
    <AppPicker placeholder="Email" icon="email"  />

  </Screen>
}

