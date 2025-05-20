import React from 'react';
import {TextInput, StyleSheet, Dimensions, View} from 'react-native';
import colors from '../../constants/colors';
import {moderateScale} from '../../helpers/ResponsiveFonts';

const {width, height} = Dimensions.get('window');

const getCustomTextInput = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'sentences',
  style,
}) => {
  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={colors.placeHolder}
          style={[styles.input, style]}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: moderateScale(45),
    borderColor: colors.textFieldBorder,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: moderateScale(16),
    marginBottom: height * 0.02,
    fontSize: moderateScale(16),
    color: colors.black,
    backgroundColor: colors.white,
  },
  inputContainer: {
    marginHorizontal: width * 0.05,
  },
});

export default getCustomTextInput;
