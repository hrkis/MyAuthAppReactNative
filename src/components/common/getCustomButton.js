import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  View,
} from 'react-native';
import {moderateScale} from '../../helpers/ResponsiveFonts';
import colors from '../../constants/colors';
const {width} = Dimensions.get('window');

const getCustomButton = ({
  onPress,
  content,
  bgColor = colors.blue,
  height = moderateScale(45),
  borderRadius = 8,
  fontSize = 16,
  color = colors.white,
  borderWidth = 0,
  borderColor = 'transparent',
  marginBottom = moderateScale(12),
  marginTop = moderateScale(8),
}) => {
  return (
    <>
      <View style={styles.inputContainer}>
        <TouchableOpacity
          onPress={onPress}
          style={[
            styles.button,
            {
              backgroundColor: bgColor,
              height,
              borderRadius: moderateScale(borderRadius),
              borderWidth,
              borderColor,
              marginBottom,
              marginTop,
            },
          ]}>
          <Text
            style={{
              fontSize: moderateScale(fontSize),
              color,
            }}>
            {content}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default getCustomButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    marginHorizontal: width * 0.05,
  },
});
