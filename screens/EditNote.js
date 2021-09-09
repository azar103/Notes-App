import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import HeaderButton from '../components/HeaderButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS, SIZES} from '../constants';
import {useDispatch, useSelector} from 'react-redux';
import {editNote, getNotes} from '../Store/actions/noteActions';

const EditNote = ({navigation, route}) => {
  const {id, creation_date, name, description} = route.params;
  const [editeName, setEditeName] = useState(name);
  const [editDescription, setEditDescription] = useState(description);
  const dispatch = useDispatch();
  const notes = useSelector(state => state.note.notes);

  const onChangeName = text => {
    setEditeName(text);
  };
  const onChangeDescription = text => {
    setEditDescription(text);
  };
  useEffect(() => {
    dispatch(getNotes());
  });
  const onEdit = () => {
    dispatch(
      editNote({
        id,
        creation_date,
        name: editeName,
        description: editDescription,
      }),
    );
    const index = notes.indexOf({id, name, description, creation_date});
    const obj = notes.find(item => item.name === name);
    console.log(obj);
    console.log(index);
    // navigation.goBack();
  };

  return (
    <View style={styles.main_container}>
      <View style={styles.header}>
        <HeaderButton onPress={() => navigation.goBack()}>
          <MaterialIcons name="keyboard-arrow-left" size={30} color="#fff" />
        </HeaderButton>
        <HeaderButton styleProp={styles.btn_save} onPress={onEdit}>
          <Text style={styles.btn_text}>Edit</Text>
        </HeaderButton>
      </View>
      <View style={{flex: 1, marginTop: 20}}>
        <TextInput
          placeholder="Title"
          style={styles.input}
          placeholderTextColor={COLORS.grey}
          selectionColor={COLORS.grey}
          value={editeName}
          onChangeText={onChangeName}
          multiline={true}
        />
        <TextInput
          numberOfLines={10}
          style={styles.textarea}
          placeholderTextColor={COLORS.grey}
          selectionColor={COLORS.grey}
          placeholder="Type something..."
          value={editDescription}
          multiline={true}
          onChangeDescription={onChangeDescription}
        />
      </View>
    </View>
  );
};

export default EditNote;

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
