import React, {FC, useContext, useEffect, useState} from 'react';

import {Pressable, StyleSheet, Text, View} from 'react-native';

import {ProfileScreenProps, ScreensEnum} from '../../navigation/types';

import defaultStyles from '../../styles/defaultStyles';

import SettingsIcon from '../../assets/icons/settings.svg';

import BaseButton from '../../components/BaseButton';
import {useAppDispatch, useAppSelector} from '../../store';
import {ThemeContext} from '../../../App';
import {getData, storeData} from '../../utils/async-storage';
import {setIsLoggedIn} from '../../store/slices/auth/slice';
import {resetProfile, saveProfile} from '../../store/slices/profile/slice';

// const info = {
//   name: 'Yuliia',
//   phone: '(097)-473-1908',
//   email: 'yuliia@gmail.com',
//   dateOfBirth: '04.10.2000',
// };

const ProfileScreen: FC<ProfileScreenProps> = ({navigation, route}) => {
  // const [user, setUser] = useState(info);

  const {profile} = useAppSelector(state => state.profile);

  const dispatch = useAppDispatch();

  const {backgroundColor} = useAppSelector(
    state => state.changeBackgroundColor,
  );

  const logOut = () => {
    dispatch(setIsLoggedIn(false));
    dispatch(resetProfile());
  };

  console.log('reset', profile);

  // const [backgroundColor, setBackgroundColor] = useState<string>('');

  // const themeContext = useContext(ThemeContext);

  return (
    <View
      style={[
        defaultStyles.outerContainer,
        {backgroundColor: backgroundColor},
      ]}>
      <BaseButton
        buttonStyles={styles.icon}
        onPress={() => {
          navigation.navigate(ScreensEnum.PROFILE_SETTINGS_SCREEN, {
            backgroundColor: backgroundColor,
            // setBackgroundColor: setBackgroundColor,
            // user: user,
            // setUser: setUser,
          });
        }}>
        <SettingsIcon width={28} height={28} />
      </BaseButton>

      <Text style={defaultStyles.titleContainer}>Profile</Text>
      <View style={defaultStyles.innerContainer}>
        <Text style={defaultStyles.text}>Name: {profile.name}</Text>
        <Text style={defaultStyles.text}>Login: {profile.login}</Text>
        <Text style={defaultStyles.text}>Phone: {profile.phone}</Text>
        <Text style={defaultStyles.text}>Email: {profile.email}</Text>
        <Text style={defaultStyles.text}>
          Date of birth: {profile.dateOfBirth}
        </Text>
        <Text style={defaultStyles.text}>Password: {profile.password}</Text>
      </View>

      <BaseButton
        title="LogOut"
        buttonStyles={styles.logOutButton}
        onPress={logOut}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginRight: 15,
    alignSelf: 'flex-end',
    backgroundColor: 'transparent',
  },

  logOutButton: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
});

export default ProfileScreen;
