import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Transactions = () => {
  return (
    <View style={styles.container}>
      <Text>Reports</Text>
    </View>
  )
}

export default Transactions

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });