import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import colors from '../../constants/colors';
import {moderateScale} from '../../helpers/ResponsiveFonts';
const {height} = Dimensions.get('window');

const getCustomTextWithLink = ({
  text,
  linkText,
  onPress,
  containerStyle,
  textStyle,
  linkStyle,
}) => {
  return (
    <View style={[styles.row, containerStyle]}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.text, styles.link, linkStyle]}>{linkText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.01,
  },
  text: {
    color: colors.blue,
    fontSize: moderateScale(14),
    textAlign: 'center',
  },
  link: {
    fontWeight: 'bold',
    color: colors.blue,
    fontSize: moderateScale(14),
    textAlign: 'center',
  },
});

export default getCustomTextWithLink;
