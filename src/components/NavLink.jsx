import React from 'react'
import { StyleSheet } from 'react-native'

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
    margin: 8,
    textDecorationLine: "underline"
  }
})

export default NavLink