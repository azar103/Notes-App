import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, SIZES} from '../constants';

const NoteItem = ({note: {title, creation_date}}) => {
  return (
    <TouchableOpacity style={styles.item_container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{creation_date}</Text>
    </TouchableOpacity>
  );
};

export default NoteItem;

const styles = StyleSheet.create({
  item_container: {
    backgroundColor: '#f00',
    marginVertical: 10,
    marginRight: 10,
    borderRadius: 5,
    width: 140,
    height: 200,
    flex: 1,
    backgroundColor: COLORS.caramel,
    padding: SIZES.padding,
    justifyContent: 'space-between',
  },
  title: {
    color: COLORS.primary,
    fontWeight: 'bold',
    fontSize: 20,
  },
  date: {
    color: '#977747',
  },
});
