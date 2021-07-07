import React from "react";
import { StyleSheet } from "react-native";

import { View, Text, Image } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";

export default function Cell() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Title</Text>
      <Image
        source={{ uri: "https://source.unsplash.com/random" }}
        style={styles.image}
      ></Image>
      <Text style={styles.footer}>Footer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    borderColor: "white",
    borderWidth: 2,
  },
  image: {
    width: "100%",
    height: 250,
  },
  title: {
    alignItems: "center",
    height: 40,
  },
  footer: {
    alignItems: "center",
    height: 50,
  },
});
