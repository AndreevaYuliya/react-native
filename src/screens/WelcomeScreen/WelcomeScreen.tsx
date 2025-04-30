import React, {FC} from 'react';

import {Text, View} from 'react-native';

import {ScreensEnum, WelcomeScreenProps} from '../../navigation/types';
import defaultStyles from '../../styles/defaultStyles';

import BaseButton from '../../components/BaseButton';

import {useAppSelector} from '../../store';

const WelcomeScreen: FC<WelcomeScreenProps> = ({navigation, route}) => {
  const {backgroundColor} = useAppSelector(
    state => state.changeBackgroundColor,
  );

  return (
    <View
      style={[
        defaultStyles.outerContainer,
        {backgroundColor: backgroundColor},
      ]}>
      <Text style={defaultStyles.titleContainer}>Hello, user!</Text>
      <View
        style={[
          defaultStyles.innerContainer,
          {
            flexDirection: 'row',
            alignSelf: 'center',
          },
        ]}>
        <BaseButton
          title="LogIn"
          onPress={() => {
            navigation.navigate(ScreensEnum.LOGIN_SCREEN);
          }}
        />

        <BaseButton
          title="Registration"
          onPress={() => {
            navigation.navigate(ScreensEnum.REGISTARTION_SCREEN);
          }}
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;
