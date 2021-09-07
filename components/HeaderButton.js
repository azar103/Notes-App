import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../constants';

const HeaderButton = ({children, onPress, styleProp}) => {
  return (
    <TouchableOpacity style={[styles.btn, styleProp]} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default HeaderButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: COLORS.lightBlack,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});
