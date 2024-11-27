import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import {colors} from '../constants/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomDropdown = ({
  label,
  value,
  onChange,
  options,
  placeholder = 'Select...',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = options.find(opt => opt.id === value);

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <TouchableOpacity
        style={styles.selector}
        onPress={() => setIsOpen(!isOpen)}>
        {selectedOption ? (
          <View style={styles.selectedOption}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {selectedOption.name
                  .split(' ')
                  .map(n => n[0])
                  .join('')}
              </Text>
            </View>
            <Text style={styles.selectedText}>{selectedOption.name}</Text>
          </View>
        ) : (
          <Text style={styles.placeholder}>{placeholder}</Text>
        )}
        <Icon
          name={isOpen ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
          size={24}
          color={colors.text[100]}
        />
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.dropdown}>
          <ScrollView style={styles.optionsList}>
            {options.map(option => (
              <TouchableOpacity
                key={option.id}
                style={styles.option}
                onPress={() => {
                  onChange(option.id);
                  setIsOpen(false);
                }}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>
                    {option.name
                      .split(' ')
                      .map(n => n[0])
                      .join('')}
                  </Text>
                </View>
                <Text style={styles.optionText}>{option.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    zIndex: 1,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text[100],
    marginBottom: 6,
  },
  selector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
    // borderWidth: 1,
    // borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: colors.background[200],
  },
  selectedOption: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  placeholder: {
    color: '#94A3B8',
  },
  selectedText: {
    color: colors.text[100],
  },
  dropdown: {
    position: 'absolute',
    top: 66,
    left: 0,
    right: 0,
    backgroundColor: colors.background[200],
    borderRadius: 8,

    maxHeight: 200,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  optionsList: {
    padding: 8,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 6,
  },
  optionText: {
    color: colors.text[100],
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.primary[200],
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  avatarText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
});

export default CustomDropdown;
