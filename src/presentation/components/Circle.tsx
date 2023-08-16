/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ColorValue, View} from 'react-native';

export type CircleProp = {
  radius: number;
  color: ColorValue | undefined;
};
const Circle = ({radius, color}: CircleProp): JSX.Element => {
  return (
    <View
      style={{
        width: radius,
        height: radius,
        backgroundColor: color,
        borderRadius: 20,
      }}
    />
  );
};

export default Circle;
