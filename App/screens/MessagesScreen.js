import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeperator from "../components/ListItemSeperator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const handleDelete = (message) => {
    // Delete message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => {
          return (
            <ListItem
              title={item.title}
              subTitle={item.description}
              image={item.image}
              onPress={() => console.log("Message Selected", item)}
              renderRightActions={() => (
                <ListItemDeleteAction onPress={() => handleDelete(item)} />
              )}
            />
          );
        }}
        ItemSeparatorComponent={() => <ListItemSeperator />}
        refreshing={refreshing}
        onRefresh={}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default MessagesScreen;
