import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TextInput, FlatList} from 'react-native';
import HeaderButton from '../components/HeaderButton';
import {COLORS, SIZES} from '../constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {getNotes} from '../Store/actions/noteActions';
import SearchItem from '../components/SearchItem';

const Search = ({navigation}) => {
  const [searchedValue, setSearchedValue] = useState('');
  const dispatch = useDispatch();
  const notes = useSelector(state => state.note.notes);
  const onChangeValue = text => {
    setSearchedValue(text);
  };

  useEffect(() => {
    dispatch(getNotes());
  }, []);

  const notesSearched = () => {
    if (searchedValue.trim().length > 0) {
      return notes.filter(
        note =>
          note.name.toLowerCase().indexOf(searchedValue.toLowerCase()) !== -1,
      );
    } else {
      return [];
    }
  };
  const notesLoaded = notesSearched();

  const renderHeader = () => (
    <View style={styles.header}>
      <HeaderButton onPress={() => navigation.goBack()}>
        <MaterialIcons name="keyboard-arrow-left" size={30} color="#fff" />
      </HeaderButton>
      <Text style={styles.title_text}>Search</Text>
    </View>
  );
  const renderItems = ({item}) => <SearchItem item={item} />;
  const renderSearchInput = () => (
    <TextInput
      style={styles.input}
      placeholder="search a note..."
      placeholderTextColor={COLORS.grey}
      selectionColor={COLORS.grey}
      onChangeText={onChangeValue}
      value={searchedValue}
    />
  );
  const renderList = () => (
    <FlatList
      data={notesLoaded}
      renderItem={renderItems}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={{marginTop: 50}}
    />
  );
  return (
    <View style={styles.main_container}>
      {renderHeader()}
      {renderSearchInput()}
      {renderList()}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    padding: SIZES.padding,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title_text: {
    color: '#fff',
    marginLeft: 30,
    fontSize: 20,
  },
  input: {
    padding: 10,
    fontSize: 30,
    color: COLORS.grey,
    marginTop: 20,
  },
});
