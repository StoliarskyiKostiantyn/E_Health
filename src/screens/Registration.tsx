import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';

import BackgroundContainer from '../containers/BackgroundContainer';
const Login = ({navigation}: any) => {
  const [isShowKeyBoard, setIsShowKeyBoard] = useState(false);
  const height = useHeaderHeight();
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const showToast = () => {
    ToastAndroid.show('Registration success!', ToastAndroid.SHORT);
  };
  const register = async () => {
    try {
      setLoading(true);

      await fetch('http://127.0.0.1:8008/user/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: userName,
          email: email,
          password: password,
        }),
      });
      setUserName('');
      setEmail('');
      setPassword('');
      showToast();
      navigation.navigate('Login');
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <BackgroundContainer>
      <KeyboardAvoidingView
        keyboardVerticalOffset={height + 100}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={{...styles.form, marginBottom: isShowKeyBoard ? 20 : 150}}>
          <Text style={styles.text}>Welcome back!</Text>
          <Text style={styles.text}>Hello again</Text>
          <View style={styles.inputView}>
            <Text style={styles.fromText}>User Name</Text>
            <TextInput
              style={styles.input}
              textAlign={'left'}
              keyboardAppearance={'default'}
              onFocus={() => {
                setIsShowKeyBoard(true);
              }}
              onChangeText={newText => setUserName(newText)}
              defaultValue={userName}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.fromText}>Email</Text>
            <TextInput
              style={styles.input}
              textAlign={'left'}
              keyboardAppearance={'default'}
              onFocus={() => {
                setIsShowKeyBoard(true);
              }}
              onChangeText={newText => setEmail(newText)}
              defaultValue={email}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.fromText}>Password</Text>
            <TextInput
              style={styles.input}
              textAlign={'left'}
              secureTextEntry
              onFocus={() => {
                setIsShowKeyBoard(true);
              }}
              onChangeText={newText => setPassword(newText)}
              defaultValue={password}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            disabled={loading}
            onPress={register}>
            <Text style={styles.buttonText}>SIGN IN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navbar}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.fromText}>Have account? tap this text</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
  navbar: {
    margin: 20,
  },
});

export default Login;
