import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import themeColors from '../../theme/themeColors';

const Button = props => {
  const {title, status} = props;
  const setColor = () => {
    switch (status) {
      case 'success':
        return themeColors.GREEN;
      case 'warning':
        return themeColors.RED;
      default:
        return themeColors.BLUE;
    }
  };

  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, {backgroundColor: setColor()}]}>
      <Text style={styles.title}> {title} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    paddingVertical: 12,
    borderRadius: 8,
    margin: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },
});

export default Button;
