import React, {Fragment} from 'react';
import {View, StatusBar} from 'react-native';
import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';
import TopInfo from './TopInfo';
import BottomCardInfo from './BottomCardInfo';

const VehicleDetail = (): JSX.Element => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" backgroundColor={colors.bgColor} />
      <View style={styles.container}>
        <TopInfo />
        <BottomCardInfo />
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgColor,
    flex: 1,
  },
});

export default VehicleDetail;
