import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import HeaderButton from '../components/HeaderButton';
import {COLORS, SIZES} from '../constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import uuid from 'react-native-uuid';
import {addNote, getNotes} from '../Store/actions/noteActions';
import moment from 'moment';
import SelectDropdown from 'react-native-select-dropdown';
import categories from '../Helpers/categories';
const AddNote = ({navigation}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const dispatch = useDispatch();

  const onChangeName = text => {
    setName(text);
  };
  const onChangeDescription = text => {
    setDescription(text);
  };

  const addNoteHandler = () => {
    dispatch(
      addNote({
        id: uuid.v4(),
        name,
        description,
        category: selectedCategory,
        creation_date: moment(new Date()).format('MMM DD,YYYY'),
      }),
    );
    navigation.goBack();
  };

  return (
    <View style={styles.main_container}>
      <View style={styles.header}>
        <HeaderButton onPress={() => navigation.goBack()}>
          <MaterialIcons name="keyboard-arrow-left" size={30} color="#fff" />
        </HeaderButton>
        <HeaderButton styleProp={styles.btn_save} onPress={addNoteHandler}>
          <Text style={styles.btn_text}>Save</Text>
        </HeaderButton>
      </View>
      <View style={{flex: 1, marginTop: 20}}>
        <TextInput
          placeholder="Title"
          style={styles.input}
          placeholderTextColor={COLORS.grey}
          selectionColor={COLORS.grey}
          onChangeText={onChangeName}
          multiline={true}
          value={name}
        />
        <SelectDropdown
          data={categories}
          onSelect={(selectedItem, index) => {
            setSelectedCategory(selectedItem);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
        />
        <TextInput
          numberOfLines={10}
          style={styles.textarea}
          placeholderTextColor={COLORS.grey}
          selectionColor={COLORS.grey}
          placeholder="Type something..."
          onChangeText={onChangeDescription}
          value={description}
          multiline={true}
        />
      </View>
    </View>
  );
};

export default AddNote;

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    padding: SIZES.padding,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn_text: {
    color: '#fff',
  },
  input: {
    fontSize: 40,
    color: COLORS.grey,
  },
  textarea: {
    fontSize: SIZES.h2,
    textAlignVertical: 'top',
    color: COLORS.grey,
  },
  btn_save: {
    width: 80,
  },
});
