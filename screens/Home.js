import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {COLORS, SIZES} from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NoteItem from '../components/NoteItem';
import HeaderButton from '../components/HeaderButton';
import {useDispatch, useSelector} from 'react-redux';
import {getNotes} from '../Store/actions/noteActions';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Home = ({navigation, route}) => {
  const dispatch = useDispatch();
  const notes = useSelector(state => state.note.notes);

  useEffect(() => {
    dispatch(getNotes());
  }, []);
  const {name, count} = route.params;

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={40} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.header_text_style}>Notes</Text>
      </View>
      <HeaderButton>
        <Ionicons name="search" color={COLORS.secondary} size={25} />
      </HeaderButton>
    </View>
  );

  const renderItem = ({item, index}) => <NoteItem note={item} index={index} />;

  const renderList = () => (
    <FlatList
      data={notes.filter(item => item.category === name)}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingTop: 40}}
      renderItem={renderItem}
      numColumns={2}
      ListFooterComponent={() => <View style={{marginBottom: 100}} />}
      ListHeaderComponent={() => (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 30,
          }}>
          <Text style={{color: COLORS.caramel, fontSize: 40}}>{name}</Text>
          <Text
            style={{
              color: COLORS.primary,
              borderRadius: 30,
              width: 40,
              height: 40,
              textAlign: 'center',
              textAlignVertical: 'center',
              fontSize: 30,
              backgroundColor: COLORS.caramel,
              marginLeft: 30,
              fontWeight: 'bold',
            }}>
            {count}
          </Text>
        </View>
      )}
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
