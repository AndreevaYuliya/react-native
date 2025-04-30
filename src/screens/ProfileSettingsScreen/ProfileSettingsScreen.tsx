import React, {FC} from 'react';

import {Alert, View} from 'react-native';

import {ProfileSettingsScreenProps, ScreensEnum} from '../../navigation/types';

import defaultStyles from '../../styles/defaultStyles';

import BaseButton from '../../components/BaseButton';
import Header from '../../components/Header';

import {useAppDispatch, useAppSelector} from '../../store';
import {resetProfile} from '../../store/slices/profile/slice';
import {setIsLoggedIn} from '../../store/slices/auth/slice';
import {getData, storeData} from '../../utils/async-storage';
import {UserInfo} from '../../store/slices/profile/types';

const ProfileSettingsScreen: FC<ProfileSettingsScreenProps> = ({
  navigation,
  route,
}) => {
  // const {backgroundColor, setBackgroundColor} = route.params;

  const {backgroundColor} = useAppSelector(
    state => state.changeBackgroundColor,
  );

  const {profile} = useAppSelector(state => state.profile);

  const dispatch = useAppDispatch();

  const showAlert = () =>
    Alert.alert('Delete account', 'Are you shure you want to delete account?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {text: 'OK', onPress: deleteAccount},
    ]);

  const deleteAccount = async () => {
    const profiles = await getData('profiles');

    console.log('profiles', profiles);

    const filteredProfiles = profiles.filter(
      (user2: UserInfo) => user2.email !== profile.email,
    );

    console.log('filteredProfiles', filteredProfiles);

    storeData('profiles', filteredProfiles);

    dispatch(setIsLoggedIn(false));
    dispatch(resetProfile());
  };

  return (
    <View
      style={[
        defaultStyles.outerContainer,
        {backgroundColor: backgroundColor},
      ]}>
      <Header title="Profile settings" />

      <BaseButton
        title="Change background color"
        onPress={() =>
          navigation.navigate(ScreensEnum.CHANGE_BACKGROUND_COLOR_SCREEN, {
            backgroundColor: backgroundColor,
            // setBackgroundColor: setBackgroundColor,
          })
        }
      />

      <BaseButton
        title="Edit Personal Information"
        onPress={() =>
          navigation.navigate(ScreensEnum.EDIT_PERSONAL_INFORMATION_SCREEN, {
            backgroundColor: backgroundColor,
            // user: user,
            // setUser: setUser,
          })
        }
      />

      <BaseButton title="Delete account" onPress={showAlert} />
    </View>
  );
};

export default ProfileSettingsScreen;
