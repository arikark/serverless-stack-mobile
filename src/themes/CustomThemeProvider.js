import React from 'react';
import { ThemeProvider } from 'react-native-elements';

import {
  useFonts,
  Montserrat_300Light,
  Montserrat_400Regular,
} from "@expo-google-fonts/dev";

export default function CustomThemeProvider({ children, variant }) {
  useFonts({
    Montserrat_400Regular,
    Montserrat_300Light
  });
  const defaultTheme = {
    Button: {
      containerStyle: {
        marginBottom: 8,
      },
      buttonStyle: {
        width: "100%",
        borderRadius: 35,
      },
      titleStyle: {
        // color: "white",
      },
    },
    Input: {
      labelStyle: {
        // fontFamily: 'Montserrat_300Light',
      },
      containerStyle: {
        margin: 2,
      },
    },
    Card: {
      containerStyle: {
        backgroundColor: 'rgba(225, 238, 242, 0.8)'
      }
    },
    Text: {
      style: {
        color: "red"
      }
    },
  };

  return (
  <ThemeProvider theme={defaultTheme}>
    {children}
  </ThemeProvider>
  )
}
