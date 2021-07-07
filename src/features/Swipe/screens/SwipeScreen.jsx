import React from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import ScrollList from "../../../components/ScrollList";

import SpacedContainer from "../../../components/SpacedContainer";

export default function SwipeScreen() {
  return (
    <SpacedContainer>
      <ScrollList />
    </SpacedContainer>
  );
}
