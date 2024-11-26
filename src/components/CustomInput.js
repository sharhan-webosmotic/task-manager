import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import { colors } from '../constants/colors';

const CustomInput = ({
  label,
  error,
  multiline = false,
  style,
  ...props
}) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[
          styles.input,
          multiline && styles.multilineInput,
          error && styles.errorInput,
          style,
        ]}
        placeholderTextColor="#94A3B8"
        multiline={multiline}
        {...props}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text[100],
    marginBottom: 6,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: colors.background[300],
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: colors.background[200],
    color: colors.text[100],
  },
  multilineInput: {
    height: 100,
    textAlignVertical: 'top',
    paddingTop: 12,
  },
  errorInput: {
    borderColor: colors.accent[100],
  },
  errorText: {
    color: colors.accent[100],
    fontSize: 12,
    marginTop: 4,
  },
});

export default CustomInput; 