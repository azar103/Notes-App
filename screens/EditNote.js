import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const EditNote = () => {
  return (
    <View style={styles.main_container}>
      <Text>Edit Note</Text>
    </View>
  );
};

export default EditNote;

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
