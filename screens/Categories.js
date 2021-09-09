import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {COLORS, SIZES} from '../constants';
import CategorieItem from '../components/CategorieItem';
import {useDispatch, useSelector} from 'react-redux';
import {getNotes} from '../Store/actions/noteActions';
import {categories} from '../Helpers/categories';
const Categories = ({navigation}) => {
  const dispatch = useDispatch();
  const notes = useSelector(state => state.note.notes);
  useEffect(() => {
    dispatch(getNotes());
  }, []);

  const renderItem = ({item}) => <CategorieItem item={item} />;
  const renderButton = () => (
    <TouchableOpacity
      style={styles.btn}
      onPress={() => navigation.navigate('AddNote')}>
      <Text style={styles.btn_text}>+</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.main_container}>
      <Text style={styles.main_title}>My Notes</Text>
      <FlatList
        contentContainerStyle={{marginTop: 50}}
        data={categories}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
      {renderButton()}
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    padding: SIZES.padding,
  },
  main_title: {
    fontSize: 50,
    color: COLORS.caramel,
  },
  btn: {
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 30,
    right: 30,

    backgroundColor: COLORS.primary,
    zIndex: 3,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },
  btn_text: {
    fontSize: 30,
    color: '#fff',
  },
});
