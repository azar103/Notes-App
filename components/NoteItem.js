import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, SIZES} from '../constants';

const NoteItem = ({note: {name, creation_date, description}, index}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#f00',
        marginVertical: 10,
        marginRight: 10,
        borderRadius: 5,
        width: 140,
        height: 200,
        flex: 1,
        backgroundColor: index % 3 !== 0 ? COLORS.caramel : COLORS.rose,
        padding: SIZES.padding,
        justifyContent: 'space-between',
      }}
      onPress={() =>
        navigation.navigate('NoteDetail', {
          name,
          creation_date,
          description,
        })
      }>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.date}>{creation_date}</Text>
    </TouchableOpacity>
  );
};

export default NoteItem;

const styles = StyleSheet.create({
  item_container: {},
  title: {
    color: COLORS.primary,
    fontWeight: 'bold',
    fontSize: 20,
  },
  date: {
    color: '#977747',
  },
});
