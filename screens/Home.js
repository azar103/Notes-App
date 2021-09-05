import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {COLORS, SIZES} from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import notes from '../Helpers/data';
import NoteItem from '../components/NoteItem';
const Home = () => {
  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.header_text_style}>Notes</Text>
      <TouchableOpacity style={styles.btn_search}>
        <Ionicons name="search" color={COLORS.secondary} size={25} />
      </TouchableOpacity>
    </View>
  );
  const renderItem = ({item}) => <NoteItem note={item} />;
  const renderList = () => (
    <FlatList
      data={notes}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingTop: 40}}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
    />
  );
  return (
    <View style={styles.main_container}>
      {renderHeader()}
      {renderList()}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    padding: SIZES.padding,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  header_text_style: {
    color: COLORS.secondary,
    fontSize: SIZES.h1,
  },
  btn_search: {
    backgroundColor: COLORS.lightBlack,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});
