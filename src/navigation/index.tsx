import {FC} from 'react';

import {SafeAreaView} from 'react-native';

import {Provider} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {RootStackNavigatorType, ScreensEnum} from './types';

import {store, useAppSelector} from '../store';

import defaultStyles from '../styles/defaultStyles';

import AuthStackNavigator from './AuthStackNavigator';
import UnauthStackNavigator from './UnauthStackNavigator';

const Stack = createStackNavigator<RootStackNavigatorType>();

const Navigation: FC = () => {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);

  return (
    <Provider store={store}>
      {/* <ThemeContext.Provider value={{bgColor, setBgColor}}> */}
      <SafeAreaView style={defaultStyles.outerContainer}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            {isLoggedIn ? (
              <Stack.Screen
                name={ScreensEnum.AUTH_NAVIGATOR}
                component={AuthStackNavigator}
              />
            ) : (
              <Stack.Screen
                name={ScreensEnum.UNAUTH_NAVIGATOR}
                component={UnauthStackNavigator}
              />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

export default Navigation;
