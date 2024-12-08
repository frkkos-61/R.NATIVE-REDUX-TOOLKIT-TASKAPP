import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  compareName,
  getInitialNameSurname,
  getRandomColor,
} from '../../utils/function';
import defaultScreenStyle from './../../styles/defaultScreenStyle';
import themeColors from '../../theme/themeColors';
import {Call, Harmony, Personalcard, Sms} from 'iconsax-react-native';
import Button from './../../components/ui/button';

const UsersDetail = ({route}) => {
  const {user} = route.params;
  return (
    <View style={defaultScreenStyle.container}>
      <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 200,
            borderBottomWidth: 0.5,
            borderColor: themeColors.BLACK,
          }}>
          <View
            style={{
              width: 85,
              height: 85,
              borderWidth: 1,
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: getRandomColor(),
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
              {getInitialNameSurname(user.name, user.surname)}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
              marginTop: 10,
            }}>
            {compareName(user.name, user.surname)}
          </Text>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 5,
            }}>
            <Sms />
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'black',
                marginLeft: 10,
                marginVertical: 8,
              }}>
              {user.email}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 5,
            }}>
            <Call />
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'black',
                marginLeft: 10,
                marginVertical: 8,
              }}>
              {user.phoneNumber}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 5,
            }}>
            <Personalcard />
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'black',
                marginLeft: 10,
                marginVertical: 8,
              }}>
              {user.age}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 5,
            }}>
            <Harmony />
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'black',
                marginLeft: 10,
                marginVertical: 8,
              }}>
              {user.gender}
            </Text>
          </View>
        </View>
        <View style={{marginTop: 30}}>
          <Button title="Delete" status="warning" />
          <Button title="Update User" />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default UsersDetail;
