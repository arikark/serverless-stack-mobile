import React, { Children } from 'react';
import { StyleSheet } from 'react-native';
import { ImageBackground } from 'react-native';

export default function CustomImageBackground({ children }) {
	return(
		<ImageBackground
			source={require('../../assets/blue-background.jpg')}
			style={styles.image}>
			{children}
    </ImageBackground>
	)
}

const styles = StyleSheet.create({
	image: {
    resizeMode: "cover",
		width: '100%',
		height: '100%'
  },
})