import React, {
  userLayoutEffect,
  useState,
  useEffect,
  useLayoutEffect,
} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ButtonWithBackground from '../components/ButtonWIthBackground';
import Images from '../const/Images';

function GroupScreen({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <ButtonWithBackground
          onPress={() => {
            navigation.navigate('Add Group Screen');
          }}
          image={Images.add}
        />
      ),
      headerLeft: () => (
        <ButtonWithBackground
          onPress={() => {
            navigation.navigate('Add Group Screen');
          }}
          image={Images.logout}
        />
      ),
    });
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>GroupScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb',
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default GroupScreen;
