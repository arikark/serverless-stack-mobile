import React, { Children } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SpacedContainer({ children }) {
	return(
		<View style={styles.container}>
			{children}
		</View>
	)
}

const styles = StyleSheet.create({
  container: {
    flex: .8,
		justifyContent: "center",
    // marginBottom: 200
  },
})