import React from 'react';
import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import {
  compareName,
  getInitialNameSurname,
  getRandomColor,
} from '../../utils/function';
import themeColors from '../../theme/themeColors';
import {ArrowRight} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {USERDETAIL} from '../../utils/routes';

const RemoteUserCard = ({user}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(USERDETAIL, {user: user})}
      style={styles.container}>
      <View>
        {user?.picture?.medium ? (
          <Image
            source={{uri: user?.picture?.medium}}
            style={{
              width: 70,
              height: 70,
              borderRadius: 100,
              resizeMode: 'contain',
            }}
          />
        ) : (
          <View
            style={{
              width: 65,
              height: 65,
              borderWidth: 1,
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: getRandomColor(),
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
              {getInitialNameSurname(user?.name?.first, user?.name?.last)}
            </Text>
          </View>
        )}
      </View>
      <View style={{padding: 10, flex: 1}}>
        <Text style={{fontSize: 18, fontWeight: '700'}}>
          {compareName(user?.name?.first, user?.name?.last)}
        </Text>
        <Text style={{fontSize: 16, fontWeight: '700'}}>{user.email}</Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <ArrowRight size={22} color={themeColors.GRAY} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: themeColors.WHITE,
    padding: 10,
    marginTop: 4,
  },
});

export default RemoteUserCard;
