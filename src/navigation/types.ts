import {
  NavigatorScreenParams,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {PostInfo} from '../screens/PostsScreen/type/types';
import {ProductsInfo} from '../screens/ProductsScreen/type/type';
import {UserInfo} from '../store/slices/profile/types';

type ScreenProps<
  Navigator extends ParamListBase,
  Screen extends keyof Navigator,
> = {
  navigation: StackNavigationProp<Navigator, Screen>;
  route: RouteProp<Navigator, Screen>;
};

export enum ScreensEnum {
  AUTH_NAVIGATOR = 'AuthNavigator',

  CHANGE_BACKGROUND_COLOR_SCREEN = 'ChangeBackgroundColorScreen',
  EDIT_PERSONAL_INFORMATION_SCREEN = 'EditPersonalInformationScreen',
  EDIT_POST_SCREEN = 'EditPostScreen',
  LOGIN_SCREEN = 'LogInScreen',
  POSTS_SCREEN = 'PostsScreen',
  PRODUCTS_SCREEN = 'ProductsScreen',
  PROFILE_SCREEN = 'ProfileScreen',
  PROFILE_SETTINGS_SCREEN = 'ProfileSettingsScreen',
  REGISTARTION_SCREEN = 'RegistrationScreen',
  SHOPPING_CART_SCREEN = 'ShoppingCartScreen',

  TABS = 'Tabs',

  UNAUTH_NAVIGATOR = 'UnauthNavigator',

  WELCOME_SCREEN = 'WelcomeScreen',
}

export type RootStackNavigatorType = {
  [ScreensEnum.AUTH_NAVIGATOR]: NavigatorScreenParams<AuthStackNavigatorType>;
  [ScreensEnum.UNAUTH_NAVIGATOR]: NavigatorScreenParams<UnauthStackNavigatorType>;
};

export type RootStackNavigationType =
  StackNavigationProp<RootStackNavigatorType>;

export type AuthStackNavigatorType = {
  [ScreensEnum.CHANGE_BACKGROUND_COLOR_SCREEN]: {
    backgroundColor: string;
    // setBackgroundColor: Dispatch<SetStateAction<string>>;
  };

  [ScreensEnum.EDIT_PERSONAL_INFORMATION_SCREEN]: {
    backgroundColor: string;
    // user: UserInfo;
    // setUser: Dispatch<SetStateAction<UserInfo>>;
  };

  [ScreensEnum.EDIT_POST_SCREEN]: {
    post: PostInfo;
  };

  [ScreensEnum.POSTS_SCREEN]: undefined;

  [ScreensEnum.PRODUCTS_SCREEN]: ProductsInfo;

  [ScreensEnum.PROFILE_SCREEN]: UserInfo | undefined;

  [ScreensEnum.PROFILE_SETTINGS_SCREEN]: {
    backgroundColor: string;
    // setBackgroundColor: Dispatch<SetStateAction<string>>;
    // user: UserInfo;
    // setUser: Dispatch<SetStateAction<UserInfo>>;
  };

  [ScreensEnum.SHOPPING_CART_SCREEN]: undefined;
  // {
  //   selectedProducts: ProductsInfo[];
  //   setSelectedProducts: Dispatch<SetStateAction<ProductsInfo[]>>;
  // };

  [ScreensEnum.TABS]: undefined;
};

export type UnauthStackNavigatorType = {
  [ScreensEnum.LOGIN_SCREEN]: undefined;

  [ScreensEnum.REGISTARTION_SCREEN]: undefined;

  [ScreensEnum.WELCOME_SCREEN]: undefined;
};

export type ChangeBackgroundColorScreenProps = ScreenProps<
  AuthStackNavigatorType,
  ScreensEnum.CHANGE_BACKGROUND_COLOR_SCREEN
>;

export type EditPersonalInformationScreenProps = ScreenProps<
  AuthStackNavigatorType,
  ScreensEnum.EDIT_PERSONAL_INFORMATION_SCREEN
>;

export type EditPostScreenProps = ScreenProps<
  AuthStackNavigatorType,
  ScreensEnum.EDIT_POST_SCREEN
>;

export type LogInScreenProps = ScreenProps<
  UnauthStackNavigatorType,
  ScreensEnum.LOGIN_SCREEN
>;

export type PostsScreenProps = ScreenProps<
  AuthStackNavigatorType,
  ScreensEnum.POSTS_SCREEN
>;

export type ProductsScreenProps = ScreenProps<
  AuthStackNavigatorType,
  ScreensEnum.PRODUCTS_SCREEN
>;

export type ProfileScreenProps = ScreenProps<
  AuthStackNavigatorType,
  ScreensEnum.PROFILE_SCREEN
>;

export type ProfileSettingsScreenProps = ScreenProps<
  AuthStackNavigatorType,
  ScreensEnum.PROFILE_SETTINGS_SCREEN
>;

export type RegistrationScreenProps = ScreenProps<
  UnauthStackNavigatorType,
  ScreensEnum.REGISTARTION_SCREEN
>;

export type ShoppingCartScreenProps = ScreenProps<
  AuthStackNavigatorType,
  ScreensEnum.SHOPPING_CART_SCREEN
>;

export type WelcomeScreenProps = ScreenProps<
  UnauthStackNavigatorType,
  ScreensEnum.WELCOME_SCREEN
>;
