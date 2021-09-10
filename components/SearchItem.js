import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {COLORS, SIZES} from '../constants';

const SearchItem = ({item: {name, description, creation_date}}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.item_container}
      onPress={() =>
        navigation.navigate('NoteDetail', {
          name,
          description,
          creation_date,
        })
      }>
      <Text style={styles.name_title}>{name}</Text>
    </TouchableOpacity>
  );
};

export default SearchItem;

const styles = StyleSheet.create({
  item_container: {
    height: 100,
    backgroundColor: COLORS.caramel,
    padding: SIZES.padding,
    marginBottom: 20,
    borderRadius: 10,
  },
  name_title: {
    color: COLORS.primary,
    fontSize: SIZES.h1,
  },
});
