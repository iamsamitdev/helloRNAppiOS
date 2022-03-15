import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlexDemo = () => {
  return (
    <View style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      // alignItems: 'stretch'
      alignItems: 'flex-end'
    }}>
      <View style={{
        flex: 1, 
        width: '50%', 
        backgroundColor:'blue',
        alignSelf: 'center'
      }}>
        <Text>Box 1</Text>
      </View>
      <View style={{
        flex: 3, 
        width: '50%', 
        backgroundColor:'red'
      }}>
        <Text>Box 2</Text>
      </View>
      <View style={{
        flex: 2, 
        width: '50%',
        alignSelf: 'flex-start', 
        backgroundColor:'green'
      }}>
        <Text>Box 3</Text>
      </View>
    </View>
  )
}

export default FlexDemo

const styles = StyleSheet.create({})