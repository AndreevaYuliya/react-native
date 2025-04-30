import {StyleSheet} from 'react-native';

import COLORS from './colors';

const defaultStyles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  titleContainer: {
    flexShrink: 1,
    fontSize: 28,
    fontWeight: 500,
    color: COLORS.white,
    textAlign: 'center',
  },

  innerContainer: {
    margin: 10,
    padding: 15,
    borderWidth: 2,
    borderColor: COLORS.blue,
    borderRadius: 20,
    alignSelf: 'stretch',
    backgroundColor: COLORS.containerBackground,
  },

  buttonContainer: {
    margin: 10,
    padding: 7,
    width: 'auto',
    height: 50,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    backgroundColor: COLORS.blue,
  },

  buttonTitle: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },

  disabled: {
    backgroundColor: COLORS.disabled,
  },

  inputContainer: {
    margin: 10,
    padding: 7,
    fontSize: 22,
    color: COLORS.black,
    backgroundColor: COLORS.white,
  },

  text: {
    fontSize: 22,
    color: COLORS.white,
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.transparent,
  },

  modal: {
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.background,
  },

  inputIcon: {
    position: 'absolute',
    right: 0,
    alignSelf: 'center',
    backgroundColor: 'transparent',
  },
});

export default defaultStyles;
