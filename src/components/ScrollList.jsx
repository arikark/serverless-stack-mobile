import React from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import Cell from "./Cell";

const data = [
  { id: "1", text: "One" },
  { id: "2", text: "Two" },
  { id: "3", text: "Three" },
  { id: "4", text: "Four" },
  { id: "5", text: "Five" },
  { id: "6", text: "Six" },
  { id: "7", text: "Seven" },
  { id: "8", text: "Eight" },
  { id: "9", text: "Nine" },
  { id: "10", text: "Ten" },
  { id: "11", text: "Eleven" },
  { id: "12", text: "Twelve" },
  { id: "13", text: "Thirteen" },
  { id: "14", text: "Fourteen" },
  { id: "15", text: "Fifteen" },
  { id: "16", text: "Sixteen" },
  { id: "17", text: "Seventeen" },
  { id: "18", text: "Eighteen" },
];

const Item = ({ item }) => {
  return <Cell />;
};

const List = () => {
  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={data}
      renderItem={Item}
      keyExtractor={(item) => item.id}
    />
  );
};

export default function ScrollList() {
  return (
    <SafeAreaView style={styles.container}>
      <List />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    marginTop: 50,
  },
  list: {
    paddingVertical: 30,
    justifyContent: "flex-start",
  },
  item: {
    backgroundColor: "#fff",
    padding: 20,
    marginHorizontal: 10,
    marginBottom: 3.5,
    flexDirection: "row",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.47,
    shadowRadius: 9,
  },
});
