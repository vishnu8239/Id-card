import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.avatarContainer}>
          <Image style={styles.avatar} source={require('./src/v.jpg')} />
        </View>
        
        <View style={styles.infoContainer}>
          <Text style={styles.title}>VISHNU JANGID</Text>
          <Text style={styles.title}>Employee ID: 8239034523</Text>
          <Text style={styles.title}>Department: Engineering</Text>
          
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    paddingHorizontal: 16,
  },
  avatarContainer: {
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
    marginBottom: 16,
  },
  avatar: {
    width: 200,
    height: 300,
    borderRadius: 10,
    marginBottom: 30,
    
  },
  infoContainer: {
    
    marginHorizontal: 10,
  },
  title: {
    marginTop: 20,
    fontSize: 18,
    marginBottom: 20,
  },


});

export default App;
