import {FC} from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {ScreensEnum, UnauthStackNavigatorType} from './types';
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen';
import LogInScreen from '../screens/LogInScreen/LogInScreen';
import RegistrationScreen from '../screens/RegistrationScreen/RegistrationScreen';

const Stack = createStackNavigator<UnauthStackNavigatorType>();

const UnauthStackNavigator: FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={ScreensEnum.WELCOME_SCREEN}
        component={WelcomeScreen}
      />

      <Stack.Screen name={ScreensEnum.LOGIN_SCREEN} component={LogInScreen} />

      <Stack.Screen
        name={ScreensEnum.REGISTARTION_SCREEN}
        component={RegistrationScreen}
      />
    </Stack.Navigator>
  );
};

export default UnauthStackNavigator;
