import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {navigation} from '../../routes/navigation';
const BackButton = (): JSX.Element => {
  return (
    <TouchableOpacity
      style={styles.backBtn}
      onPress={() => {
        console.log('back pressed');
        navigation.goBack();
      }}>
      <Icon name="arrow-left" size={30} color="black" />
    </TouchableOpacity>
  );
};

export const Header = (): JSX.Element => {
  return (
    <View style={styles.header}>
      <BackButton />
      <Text style={styles.headerText}>Thông tin xe</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backBtn: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 15,
    shadowColor: '#000000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.19,
    shadowRadius: 10,
    elevation: 6,
  },
  headerText: {
    color: 'black',
    paddingStart: 15,
    fontSize: 24,
    fontFamily: 'Nunito-Bold',
  },
});
