import React from 'react';
import {
  TouchableOpacity,
  TouchableWithoutFeedbackProps,
  Text,
} from 'react-native';
import {colors} from '../../constants/colors';

export type ButtonProp = TouchableWithoutFeedbackProps & {
  text: string;
  height?: number;
  width?: number;
};
const Button = ({text, height, width, ...rest}: ButtonProp) => {
  return (
    <TouchableOpacity
      {...rest}
      style={{
        backgroundColor: colors.primaryColor,
        height: height,
        width: width,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{color: 'white', fontFamily: 'Nunito-Regular', fontSize: 14}}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
