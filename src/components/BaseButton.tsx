import React, {FC, ReactNode} from 'react';

import {Pressable, StyleProp, Text, TextStyle, ViewStyle} from 'react-native';
import defaultStyles from '../styles/defaultStyles';

type Props = {
  disabled?: boolean;
  title?: string;
  pressedOpacity?: number;
  titleStyles?: StyleProp<TextStyle>;
  buttonStyles?: StyleProp<ViewStyle>;
  onPress: () => void;
  children?: ReactNode;
};

const BaseButton: FC<Props> = props => {
  const {
    disabled,
    title,
    pressedOpacity = 0.5,
    titleStyles,
    buttonStyles,
    onPress,
    children,
  } = props;

  return (
    <Pressable
      disabled={disabled}
      style={({pressed}) => [
        defaultStyles.buttonContainer,
        buttonStyles,
        {opacity: pressed ? pressedOpacity : 1},
      ]}
      onPress={onPress}>
      {title && (
        <Text style={[defaultStyles.buttonTitle, titleStyles]}>{title}</Text>
      )}
      {children}
    </Pressable>
  );
};

export default BaseButton;
