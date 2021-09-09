import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS, SIZES} from '../constants';
import {useDispatch, useSelector} from 'react-redux';
import {getNumberOfNotesByCategory} from '../Helpers/functions';
import {getNotes} from '../Store/actions/noteActions';
import {useNavigation} from '@react-navigation/native';

const CategorieItem = ({item}) => {
  const dispatch = useDispatch();
  const notes = useSelector(state => state.note.notes);

  useEffect(() => {
    dispatch(getNotes());
  }, []);
  const count = getNumberOfNotesByCategory(item.name, notes);
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.categorie_item_container}
      onPress={() => {
        navigation.navigate('Home', {
          name: item.name,
          count,
        });
      }}>
      <Text style={styles.name_style}>{item.name}</Text>
      <Text
        style={{
          borderRadius: 50,
          padding: SIZES.padding,
          backgroundColor: COLORS.primary,
          color: COLORS.caramel,
          width: 60,
          height: 60,
          textAlignVertical: 'center',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 20,
        }}>
        {count}
      </Text>
    </TouchableOpacity>
  );
};

export default CategorieItem;

const styles = StyleSheet.create({
  categorie_item_container: {
    height: 150,
    backgroundColor: COLORS.caramel,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name_style: {
    fontSize: SIZES.h1,
    fontWeight: 'bold',
  },
});
