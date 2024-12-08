import React, {useEffect} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import {useDispatch, useSelector} from 'react-redux';
import UserCard from '../../components/users/userCard';
import FloatActionButton from '../../components/ui/floatActionButton';
import {useNavigation} from '@react-navigation/native';
import {ADDNEWUSER} from '../../utils/routes';
import {getUsers} from '../../store/actions/userActions';
import RemoteUserCard from './../../components/users/RemoteUserCard';
import themeColors from '../../theme/themeColors';

const RemoteUsers = () => {
  const navigation = useNavigation();
  const {users, pending} = useSelector(state => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers({results: 10}));
  }, []);

  return (
    <View style={defaultScreenStyle.container}>
      {pending ? (
        <ActivityIndicator size={'large'} color={themeColors.BLACK} />
      ) : (
        <FlatList
          ListEmptyComponent={
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Henüz bir kullanıcı eklenmedi !
            </Text>
          }
          data={users}
          renderItem={({item}) => <RemoteUserCard user={item} />}
        />
      )}
      <FloatActionButton onPress={() => navigation.navigate(ADDNEWUSER)} />
    </View>
  );
};

export default RemoteUsers;
