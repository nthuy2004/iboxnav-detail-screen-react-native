/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Text, Alert} from 'react-native';
import Button from '../../components/Button';
import {SectionGrid} from 'react-native-super-grid';

const mockData = [
  {
    title: 'Thông tin xe',
    data: [
      {key: 'Vĩ độ', value: '1000.000000001'},
      {key: 'Kinh độ', value: '1000.000000001'},
      {key: 'Vận tốc giới hạn', value: '1001km/h'},
      {key: 'Quãng đường', value: '1000km'},
      {key: 'Vận tốc', value: '1000km/h'},
    ],
  },
  {
    title: 'Thông tin lái xe',
    data: [
      {key: 'Lái xe', value: 'Chưa đăng nhập'},
      {key: 'Số điện thoại', value: '0123456789'},
      {key: 'Giấy phép lái xe', value: 'Chưa đăng nhập'},
    ],
  },
];

const GridHeader = ({title}: {title: string}): JSX.Element => {
  return <Text style={styles.gridHeader}>{title}</Text>;
};
const GridItem = ({
  title,
  value,
}: {[key in 'title' | 'value']: string}): JSX.Element => {
  return (
    <View>
      <Text style={{color: 'grey', fontSize: 10, fontWeight: '400'}}>
        {title}
      </Text>
      <Text style={{color: 'black', fontSize: 14, fontWeight: '400'}}>
        {value}
      </Text>
    </View>
  );
};

const BottomCardInfo = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <SectionGrid
          sections={mockData}
          renderItem={({item}) => (
            <GridItem title={item.key} value={item.value} />
          )}
          renderSectionHeader={({section}) => {
            console.log(section);
            return <GridHeader title={section.title} />;
          }}
        />
      </View>
      <View style={styles.bottomBtn}>
        <Button
          text="Giám sát xe"
          height={58}
          onPress={() => {
            Alert.alert('hahaha', 'hihihi');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    shadowColor: 'grey',
    shadowOffset: {
      width: 30,
      height: 30,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  bottomBtn: {
    flex: 0,
  },
  gridHeader: {
    paddingTop: 6,
    paddingBottom: 12,
    fontSize: 20,
    fontFamily: 'Nunito-Bold',
    color: 'black',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default BottomCardInfo;
