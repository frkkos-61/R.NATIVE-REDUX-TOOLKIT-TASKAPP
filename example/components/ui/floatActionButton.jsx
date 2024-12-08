import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import themeColors from '../../theme/themeColors';
import {Add} from 'iconsax-react-native';

const FloatActionButton = (props) => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Add size={35} color={themeColors.WHITE} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themeColors.GREEN,
    width: 80,
    height: 80,
    borderRadius: 100,
    position: 'absolute',
    bottom: 30,
    right: 20,
    cursor: 'pointer',
  },
});

export default FloatActionButton;
