import React, {FC} from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {AuthStackNavigatorType, ScreensEnum} from './types';

import COLORS from '../styles/colors';

import ChangeBackgroundColorScreen from '../screens/ChangeBackgroundColorScreen/ChangeBackgroundColorScreen';
import EditPersonalInformationScreen from '../screens/EditPersonalInformationScreen/EditPersonalInformationScreen';
import EditPostScreen from '../screens/EditPostScreen/EditPostScreen';
import PostsScreen from '../screens/PostsScreen/PostsScreen';
import ProfileSettingsScreen from '../screens/ProfileSettingsScreen/ProfileSettingsScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen/ShoppingCartScreen';
import ProductsScreen from '../screens/ProductsScreen/ProductsScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';

import ProfileIcon from '../assets/icons/profile.svg';

const Stack = createStackNavigator<AuthStackNavigatorType>();
const Tab = createBottomTabNavigator<AuthStackNavigatorType>();

const Tabs: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        animation: 'shift',
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: 400,
          color: COLORS.blue,
        },
        tabBarStyle: {backgroundColor: COLORS.background},
      }}>
      <Tab.Screen
        name={ScreensEnum.PROFILE_SCREEN}
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          headerShown: false,
          tabBarIconStyle: {},
          tabBarIcon: () => <ProfileIcon width={24} height={24} />,
        }}
      />

      <Tab.Screen
        name={ScreensEnum.POSTS_SCREEN}
        component={PostsScreen}
        options={{
          tabBarLabel: 'Posts',
          headerShown: false,
          tabBarIconStyle: {},
          // tabBarIcon: () => (
          //   <SettingsIcon fill={'red'} width={20} height={20} />
          // ),
        }}
      />

      <Tab.Screen
        name={ScreensEnum.PRODUCTS_SCREEN}
        component={ProductsScreen}
        options={{
          tabBarLabel: 'Products',
          headerShown: false,
          tabBarIconStyle: {},
          // tabBarIcon: () => (
          //   <SettingsIcon fill={'red'} width={20} height={20} />
          // ),
        }}
      />
    </Tab.Navigator>
  );
};

const AuthStackNavigator: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ScreensEnum.TABS} component={Tabs} />

      <Stack.Screen
        name={ScreensEnum.SHOPPING_CART_SCREEN}
        component={ShoppingCartScreen}
      />

      <Stack.Screen name={ScreensEnum.POSTS_SCREEN} component={PostsScreen} />

      <Stack.Screen
        name={ScreensEnum.EDIT_POST_SCREEN}
        component={EditPostScreen}
      />

      <Stack.Screen
        name={ScreensEnum.PROFILE_SETTINGS_SCREEN}
        component={ProfileSettingsScreen}
      />

      <Stack.Screen
        name={ScreensEnum.CHANGE_BACKGROUND_COLOR_SCREEN}
        component={ChangeBackgroundColorScreen}
      />

      <Stack.Screen
        name={ScreensEnum.EDIT_PERSONAL_INFORMATION_SCREEN}
        component={EditPersonalInformationScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
