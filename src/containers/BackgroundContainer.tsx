import {View, ImageBackground, StyleSheet} from 'react-native';
import React, {ReactNode} from 'react';

interface IBackgroundContainerProps {
  children: ReactNode;
}

const BackgroundContainer = ({children}: IBackgroundContainerProps) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assetes/image/image2.jpeg')}
        resizeMode="cover"
        style={styles.image}>
        {children}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default BackgroundContainer;
