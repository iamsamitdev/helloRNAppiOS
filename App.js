import {SafeAreaView, StyleSheet, Platform} from 'react-native';
import React from 'react';
import Comment from './components/comments/Comment'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Comment />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
  },

  ...Platform.select({
    ios: {
      text:{
        fontSize: 50,
        textAlign: 'center',
        color: 'red'
      }
    },
    android: {
      text:{
        fontSize: 80,
        textAlign: 'center',
        color: 'blue'
      }
    }
  })

  
})
