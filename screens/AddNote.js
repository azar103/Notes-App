import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import HeaderButton from '../components/HeaderButton';
import {COLORS, SIZES} from '../constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import uuid from 'react-native-uuid';
import {addNote, getNotes} from '../Store/actions/noteActions';
import moment from 'moment';

const AddNote = ({navigation}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
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
        creation_date: moment(new Date()).format('MMM DD,YYYY'),
      }),
    );
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
          value={name}
        />
        <TextInput
          numberOfLines={10}
          style={styles.textarea}
          placeholderTextColor={COLORS.grey}
          selectionColor={COLORS.grey}
          placeholder="Type something..."
          onChangeText={onChangeDescription}
          value={description}
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
