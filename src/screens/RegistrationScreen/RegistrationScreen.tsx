import React, {FC, useState} from 'react';

import {ScrollView, Text, TextInput, View} from 'react-native';

import {RegistrationScreenProps, ScreensEnum} from '../../navigation/types';

import defaultStyles from '../../styles/defaultStyles';

import {useAppDispatch, useAppSelector} from '../../store';

import Header from '../../components/Header';
import BaseButton from '../../components/BaseButton';

import CloseEyeIcon from '../../assets/icons/close-eye.svg';
import {saveProfile} from '../../store/slices/profile/slice';
import {UserInfo} from '../../store/slices/profile/types';
import {setIsLoggedIn} from '../../store/slices/auth/slice';

import {getData, storeData} from '../../utils/async-storage';

const RegistrationScreen: FC<RegistrationScreenProps> = ({
  navigation,
  route,
}) => {
  const {backgroundColor} = useAppSelector(
    state => state.changeBackgroundColor,
  );

  const dispatch = useAppDispatch();

  const [isPasswordHidden, setIisPasswordHidden] = useState(true);

  const [name, setName] = useState('');

  const [login, setLogin] = useState('');

  const [phone, setPhone] = useState('');

  const [email, setEmail] = useState('');

  const [dateOfBirth, setDateOfBirth] = useState('');

  const [password, setPassword] = useState('');

  const [confirmedPassword, setConfirmedPassword] = useState('');

  const isRegisterButtonDisabled = () => {
    return (
      !name ||
      !phone ||
      !email ||
      !dateOfBirth ||
      !password ||
      password !== confirmedPassword
    );
  };

  const isRegisterDisabled = () => {
    if (isRegisterButtonDisabled()) {
      return defaultStyles.disabled;
    }

    return null;
  };

  const register = async () => {
    if (isRegisterButtonDisabled()) {
      return null;
    }

    const newUser = {
      name: name,
      login: login,
      phone: phone,
      email: email,
      dateOfBirth: dateOfBirth,
      password: password,
    };

    dispatch(saveProfile(newUser));

    const storedProfiles: UserInfo[] = await getData('profiles');

    if (storedProfiles !== null && storedProfiles.length !== 0) {
      if (
        !storedProfiles.find(
          user => user.email === email && user.password === password,
        )
      ) {
        storedProfiles.push(newUser);

        storeData('profiles', storedProfiles);
      }
    } else {
      storeData('profiles', [newUser]);
    }

    dispatch(setIsLoggedIn(true));

    console.log(await getData('profiles'));
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[
        defaultStyles.outerContainer,
        {backgroundColor: backgroundColor},
      ]}>
      <Header title="Registration" />

      <View style={defaultStyles.innerContainer}>
        <Text style={[defaultStyles.text, {marginLeft: 10}]}>Name</Text>
        <TextInput
          value={name}
          style={defaultStyles.inputContainer}
          onChangeText={text => setName(text)}
        />

        <Text style={[defaultStyles.text, {marginLeft: 10}]}>Login</Text>
        <TextInput
          value={login}
          style={defaultStyles.inputContainer}
          onChangeText={text => setLogin(text)}
        />

        <Text style={[defaultStyles.text, {marginLeft: 10}]}>Phone</Text>
        <TextInput
          value={phone}
          style={defaultStyles.inputContainer}
          onChangeText={text => setPhone(text)}
        />

        <Text style={[defaultStyles.text, {marginLeft: 10}]}>Email</Text>
        <TextInput
          value={email}
          style={defaultStyles.inputContainer}
          onChangeText={text => setEmail(text)}
        />

        <Text style={[defaultStyles.text, {marginLeft: 10}]}>
          Date of birth
        </Text>
        <TextInput
          value={dateOfBirth}
          style={defaultStyles.inputContainer}
          onChangeText={text => setDateOfBirth(text)}
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

        <Text style={[defaultStyles.text, {marginLeft: 10}]}>
          Confirm password
        </Text>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            value={confirmedPassword}
            secureTextEntry={isPasswordHidden}
            style={[defaultStyles.inputContainer, {flex: 1}]}
            onChangeText={text => setConfirmedPassword(text)}
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
        disabled={isRegisterButtonDisabled()}
        title="Register"
        buttonStyles={[{alignSelf: 'center'}, isRegisterDisabled()]}
        onPress={register}
      />
    </ScrollView>
  );
};

export default RegistrationScreen;
