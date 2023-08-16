import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import Button from '../../components/Button';
import {navigation} from '../../routes/navigation';

const routes = [
  {title: 'Vehicle detail', route: 'VehicleDetail', params: {vehicleId: 1234}},
];
type NavListProp = {
  data: {title: string; route: string; params: object | undefined}[];
};

const NavList = ({data}: NavListProp) => {
  return (
    <FlatList
      data={data}
      renderItem={({item, index}) => (
        <Button
          key={index}
          height={58}
          text={item.title}
          onPress={() => navigation.navigate(item.route, item.params)}
        />
      )}
    />
  );
};

const Home = (): JSX.Element => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <NavList data={routes} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  text: {
    color: 'red',
  },
});

export default Home;
