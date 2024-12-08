import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import {useDispatch, useSelector} from 'react-redux';
import UserCard from '../../components/users/userCard';
import FloatActionButton from '../../components/ui/floatActionButton';
import {useNavigation} from '@react-navigation/native';
import {ADDNEWUSER} from '../../utils/routes';
import {getUsers} from '../../store/actions/userActions';

const Users = () => {
  const navigation = useNavigation();
  const {users} = useSelector(state => state.users);

  return (
    <View style={defaultScreenStyle.container}>
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
        renderItem={({item}) => <UserCard user={item} />}
      />
      <FloatActionButton onPress={() => navigation.navigate(ADDNEWUSER)} />
    </View>
  );
};

export default Users;
