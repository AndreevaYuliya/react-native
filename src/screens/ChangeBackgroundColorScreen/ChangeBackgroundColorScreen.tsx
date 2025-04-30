import React, {FC, useState} from 'react';

import {TextInput, View} from 'react-native';

import {
  ChangeBackgroundColorScreenProps,
  ScreensEnum,
} from '../../navigation/types';

import defaultStyles from '../../styles/defaultStyles';

import Header from '../../components/Header';
import BaseButton from '../../components/BaseButton';

import {useAppDispatch} from '../../store';
import {changeBackgroundColor} from '../../store/slices/changingStyles/slice';

const ChangeBackgroundColorScreen: FC<ChangeBackgroundColorScreenProps> = ({
  navigation,
  route,
}) => {
  const {backgroundColor} = route.params;

  const dispatch = useAppDispatch();

  const [inputedColor, setInputedColor] = useState('');

  const changeColor = () => {
    // setBackgroundColor(inputedColor);

    dispatch(changeBackgroundColor(inputedColor));
    navigation.navigate(ScreensEnum.PROFILE_SCREEN);
  };
  return (
    <View
      style={[
        defaultStyles.outerContainer,
        {backgroundColor: backgroundColor},
      ]}>
      <Header title="Change background color" />

      <TextInput
        style={[defaultStyles.text, defaultStyles.inputContainer]}
        onChangeText={text => setInputedColor(text.toLowerCase())}
      />

      <BaseButton
        title="Change color"
        buttonStyles={{alignSelf: 'center'}}
        onPress={changeColor}
      />
    </View>
  );
};

export default ChangeBackgroundColorScreen;
