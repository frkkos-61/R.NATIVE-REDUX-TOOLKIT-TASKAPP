import {StyleSheet, Text, TextInput, View} from 'react-native';
import themeColors from '../../theme/themeColors';

const Input = props => {
  const {title, error} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}> {title} </Text>
      <TextInput {...props} style={styles.input} />
      {error && (
        <Text style={{marginTop: 2, color: themeColors.RED}}> {error} !</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  title: {
    fontSize: 18,
    color: themeColors.BLACK,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    padding: 7,
    backgroundColor: themeColors.INPUT,
    fontSize: 14,
    borderRadius: 5,
    paddingVertical: 8,
  },
});

export default Input;
