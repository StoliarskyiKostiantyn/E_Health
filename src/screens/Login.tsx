import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import BackgroundContainer from '../containers/BackgroundContainer';
const Login = () => {
  return (
    <BackgroundContainer>
      <View style={styles.form}>
        <Text style={styles.text}>Welcome back!</Text>
        <Text style={styles.text}>Hello again</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={styles.inputView}>
            <Text style={styles.fromText}>Email</Text>
            <TextInput style={styles.input} textAlign={'left'} />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.fromText}>Password</Text>
            <TextInput
              style={styles.input}
              textAlign={'left'}
              secureTextEntry
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </BackgroundContainer>
  );
};

const styles = StyleSheet.create({
  form: {
    textAlign: 'center',
    marginHorizontal: 40,
  },
  text: {
    color: '#fff',
    fontSize: 25,
  },
  fromText: {
    color: 'azure',
    fontSize: 20,
    marginBottom: 10,
  },
  inputView: {
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    height: 40,
    color: '#fff',
    borderRadius: 6,
  },
});

export default Login;
