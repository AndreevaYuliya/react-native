import React, {FC, ReactNode} from 'react';

import {StyleSheet, Text, View} from 'react-native';

import defaultStyles from '../styles/defaultStyles';

import ArrowLeftIcon from '../assets/icons/arrow-left.svg';

import BaseButton from './BaseButton';
import {useNavigation} from '@react-navigation/native';

type Props = {
  title: string;
  children?: ReactNode;
};

const Header: FC<Props> = props => {
  const {title, children} = props;
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <BaseButton
        buttonStyles={styles.icon}
        onPress={() => navigation.goBack()}>
        <ArrowLeftIcon width={24} height={24} />
      </BaseButton>

      <Text style={defaultStyles.titleContainer}>{title}</Text>
      <View style={{position: 'absolute', right: 15}}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginLeft: 15,
    backgroundColor: 'transparent',
  },
});

export default Header;
