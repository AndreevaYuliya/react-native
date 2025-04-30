import React, {FC, useState} from 'react';

import {TextInput, View} from 'react-native';

import {
  EditPersonalInformationScreenProps,
  ScreensEnum,
} from '../../navigation/types';

import defaultStyles from '../../styles/defaultStyles';
import Header from '../../components/Header';
import BaseButton from '../../components/BaseButton';

import {useAppDispatch, useAppSelector} from '../../store';
import {saveProfile} from '../../store/slices/profile/slice';

const EditPersonalInformationScreen: FC<EditPersonalInformationScreenProps> = ({
  navigation,
  route,
}) => {
  // const {backgroundColor} = route.params;

  const {profile} = useAppSelector(state => state.profile);

  const dispatch = useAppDispatch();

  const {backgroundColor} = useAppSelector(
    state => state.changeBackgroundColor,
  );

  const [changeUserInfo, setChangedUserInfo] = useState(profile);

  const save = () => {
    // setUser(changeUserInfo);

    dispatch(saveProfile(changeUserInfo));

    navigation.navigate(ScreensEnum.PROFILE_SCREEN);
  };

  return (
    <View
      style={[
        defaultStyles.outerContainer,
        {backgroundColor: backgroundColor},
      ]}>
      <Header title="Edit personal information" />

      <View style={defaultStyles.innerContainer}>
        <TextInput
          value={changeUserInfo.name}
          style={defaultStyles.inputContainer}
          onChangeText={text =>
            setChangedUserInfo({...changeUserInfo, name: text})
          }
        />

        <TextInput
          value={changeUserInfo.phone}
          style={defaultStyles.inputContainer}
          onChangeText={text =>
            setChangedUserInfo({...changeUserInfo, phone: text})
          }
        />

        <TextInput
          value={changeUserInfo.email}
          style={defaultStyles.inputContainer}
          onChangeText={text =>
            setChangedUserInfo({...changeUserInfo, email: text})
          }
        />

        <TextInput
          value={changeUserInfo.dateOfBirth}
          style={defaultStyles.inputContainer}
          onChangeText={text =>
            setChangedUserInfo({...changeUserInfo, dateOfBirth: text})
          }
        />

        <TextInput
          value={changeUserInfo.password}
          style={defaultStyles.inputContainer}
          onChangeText={text =>
            setChangedUserInfo({...changeUserInfo, password: text})
          }
        />
      </View>

      <BaseButton
        title="Save"
        buttonStyles={{alignSelf: 'center'}}
        onPress={save}
      />
    </View>
  );
};

export default EditPersonalInformationScreen;
