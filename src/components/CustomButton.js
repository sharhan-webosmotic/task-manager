import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {colors} from '../constants/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomButton = ({
  variant = 'solid',
  color = colors.accent[100],
  textColor = colors.text[100],
  onPress = () => {},
  children,
  icon,
  style,
  ...props
}) => {
  const buttonStyles = [
    styles.baseButton,
    variant === 'outline' && {
      backgroundColor: 'transparent',
      borderWidth: 1.5,
      borderColor: color,
    },
    variant === 'text' && {backgroundColor: 'transparent', borderWidth: 0},
    variant === 'solid' && {backgroundColor: color},
    style,
  ];

  const textStyles = [
    styles.baseText,
    {color: variant === 'solid' ? textColor : color},
  ];

  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress} {...props}>
      {icon && <Icon name={icon} size={20} color={textColor} />}
      <Text style={textStyles}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  baseButton: {
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  baseText: {
    fontSize: 16,
  },
});

export default CustomButton;
