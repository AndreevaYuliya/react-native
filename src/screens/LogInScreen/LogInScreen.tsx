import React, {FC, useState} from 'react';

import {Alert, Text, TextInput, View} from 'react-native';

import defaultStyles from '../../styles/defaultStyles';

import {useAppDispatch, useAppSelector} from '../../store';

import {setIsLoggedIn} from '../../store/slices/auth/slice';

import Header from '../../components/Header';
import BaseButton from '../../components/BaseButton';

import CloseEyeIcon from '../../assets/icons/close-eye.svg';
import {getData} from '../../utils/async-storage';
import {saveProfile} from '../../store/slices/profile/slice';
import {UserInfo} from '../../store/slices/profile/types';
import {LogInScreenProps} from '../../navigation/types';

const LogInScreen: FC<LogInScreenProps> = ({navigation, route}) => {
  const {backgroundColor} = useAppSelector(
    state => state.changeBackgroundColor,
  );

  const dispatch = useAppDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordHidden, setIisPasswordHidden] = useState(true);

  const isLogInButtonDisabled = () => {
    return !email || !password;
  };

  const isLogInDisabled = () => {
    if (isLogInButtonDisabled()) {
      return defaultStyles.disabled;
    }

    return null;
  };

  const logIn = async () => {
    if (isLogInButtonDisabled()) {
      return null;
    }

    const profiles = await getData('profiles');

    const userProfile = profiles.find(
      (user: UserInfo) => user.email === email && user.password === password,
    );

    if (userProfile) {
      dispatch(saveProfile(userProfile));

      dispatch(setIsLoggedIn(true));
    } else {
      return Alert.alert("Cant't find such user. Check the email and password");
    }
  };

  return (
    <View
      style={[
        defaultStyles.outerContainer,
        {backgroundColor: backgroundColor},
      ]}>
      <Header title="LogIn" />

      <View style={defaultStyles.innerContainer}>
        <Text style={[defaultStyles.text, {marginLeft: 10}]}>Email</Text>
        <TextInput
          value={email}
          style={defaultStyles.inputContainer}
          onChangeText={text => setEmail(text)}
        />

        <Text style={[defaultStyles.text, {marginLeft: 10}]}>Password</Text>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            value={password}
            secureTextEntry={isPasswordHidden}
            style={[defaultStyles.inputContainer, {flex: 1}]}
            onChangeText={text => setPassword(text)}
          />

          <BaseButton
            buttonStyles={defaultStyles.inputIcon}
            onPress={() =>
              isPasswordHidden
                ? setIisPasswordHidden(false)
                : setIisPasswordHidden(true)
            }>
            <CloseEyeIcon width={24} height={24} />
          </BaseButton>
        </View>
      </View>

      <BaseButton
        disabled={isLogInButtonDisabled()}
        title="LogIn"
        buttonStyles={[{alignSelf: 'center'}, isLogInDisabled()]}
        onPress={logIn}
      />
    </View>
  );
};

export default LogInScreen;
