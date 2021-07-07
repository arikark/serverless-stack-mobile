import React from "react";
import { StyleSheet } from "react-native";
import { ImageBackground, StatusBar } from "react-native";

function CustomImageBackground({ children }) {
  StatusBar.setHidden(false);
  return (
    <ImageBackground
      // source={requurlire("../../assets/blue-background.jpg")}
      source={{ uri: "https://source.unsplash.com/random" }}
      style={styles.image}
    >
      {children}
    </ImageBackground>
  );
}

export default CustomImageBackground;

const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
});
