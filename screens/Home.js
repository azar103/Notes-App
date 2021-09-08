import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {COLORS, SIZES} from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NoteItem from '../components/NoteItem';
import HeaderButton from '../components/HeaderButton';
import {useDispatch, useSelector} from 'react-redux';
import {getNotes} from '../Store/actions/noteActions';
import {Swipeable, RectButton} from 'react-native-gesture-handler';
const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const notes = useSelector(state => state.note.notes);

  useEffect(() => {
    dispatch(getNotes());
  }, []);

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.header_text_style}>Notes</Text>
      <HeaderButton>
        <Ionicons name="search" color={COLORS.secondary} size={25} />
      </HeaderButton>
    </View>
  );

  const renderItem = ({item, index}) => <NoteItem note={item} index={index} />;

  const renderList = () => (
    <FlatList
      data={notes}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingTop: 40}}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
      ListFooterComponent={() => <View style={{marginBottom: 100}} />}
    />
  );
  const renderButton = () => (
    <TouchableOpacity
      style={styles.btn}
      onPress={() => navigation.navigate('AddNote')}>
      <Text style={styles.btn_text}>+</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.main_container}>
      {renderHeader()}
      {renderList()}
      {renderButton()}
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
