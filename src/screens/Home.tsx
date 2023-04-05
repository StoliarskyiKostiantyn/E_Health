import {getAuth, signOut} from 'firebase/auth';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
const Home = () => {
  const auth = getAuth();
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => signOut(auth)}>
        <Text style={styles.buttonText}>SIGN OUT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 40,
    width: 200,
    backgroundColor: 'blue',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 10,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default Home;
