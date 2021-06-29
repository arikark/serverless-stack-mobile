import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

import { Link } from '@react-navigation/native';

const NavLink = ({ text, routeName}) => {

  return (
      <Link style={styles.link} to={routeName}>{text}</Link>
    )
  }

const styles = StyleSheet.create({
  link: {
    textAlign: 'left',
    paddingHorizontal: 0,
    // borderColor: "red",
    // borderWidth: 1,
    marginTop: 4,
    textDecorationLine: "underline"
  }
})

export default NavLink