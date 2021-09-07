import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {COLORS, SIZES} from '../constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HeaderButton from '../components/HeaderButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const NoteDetail = ({navigation, route}) => {
  const {name, creation_date, description} = route.params;

  const renderHeader = () => (
    <View style={styles.header}>
      <HeaderButton onPress={() => navigation.goBack()}>
        <MaterialIcons name="keyboard-arrow-left" size={30} color="#fff" />
      </HeaderButton>
      <HeaderButton>
        <MaterialIcons name="edit" size={20} color="#fff" />
      </HeaderButton>
    </View>
  );
  const renderDetails = () => (
    <View>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.date}>{creation_date}</Text>
      <ScrollView>
        <Text style={styles.description}>{description}</Text>
      </ScrollView>
    </View>
  );
  return (
    <View style={styles.main_container}>
      {renderHeader()}
      {renderDetails()}
    </View>
  );
};

export default NoteDetail;

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
  title: {
    fontSize: 30,
    color: '#fff',
    marginTop: 30,
    marginBottom: 30,
  },
  date: {
    color: 'grey',
    fontSize: 15,
    marginBottom: 30,
  },
  description: {
    color: COLORS.secondary,
    lineHeight: 30,
  },
});
