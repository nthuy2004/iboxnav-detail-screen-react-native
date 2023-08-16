/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Circle from '../../components/Circle';
import {Header} from './Header';
const TextWithIconBefore = ({
  text,
  icon,
}: {
  text: string;
  icon: JSX.Element;
}) => {
  return (
    <View style={styles.textIconContainer}>
      {icon}
      <Text style={styles.textIconTxt}>{text}</Text>
    </View>
  );
};

const TopInfo = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../../assets/images/img_group2.png')}
      />
      <View style={{paddingHorizontal: 20}}>
        <Header />
        <View style={styles.vehicleDescription}>
          <Text style={styles.licenseId}>60F-009.43</Text>
          <TextWithIconBefore
            text="17/11/2022 12:34:56"
            icon={<Icon name="calendar" size={15} color="black" />}
          />
          <TextWithIconBefore
            text="Đang dừng"
            icon={<Circle radius={16} color="blue" />}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    position: 'relative',
    flex: 0,
  },
  licenseId: {
    color: 'black',
    fontFamily: 'Nunito-Bold',
    fontSize: 24,
    paddingBottom: 8,
  },
  textIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
  },
  textIconTxt: {
    paddingStart: 8,
    fontSize: 16,
    fontFamily: 'Nunito-Regular',
    color: 'black',
  },
  image: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '100%',
    height: 250,
    resizeMode: 'stretch',
  },
  vehicleDescription: {
    paddingVertical: 16,
  },
});

export default TopInfo;
