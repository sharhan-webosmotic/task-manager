import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../constants/colors';

const CustomSearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleClear = () => {
    setSearchText('');
  };

  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchBar}>
        <Icon name="search" size={20} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          value={searchText}
          onChangeText={setSearchText}
          placeholder="Search..."
          placeholderTextColor="black"
        />
        {searchText.length > 0 && (
          <TouchableOpacity onPress={handleClear} style={styles.clearButton}>
            <Icon name="close-circle" size={20} color="white" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    padding: 10,
    flex: 1,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.primary[100],
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: colors.background[200],
  },
  input: {
    flex: 1,
    height: 40,
    marginLeft: 10,
    backgroundColor: 'transparent',
    color: colors.text[100],
  },
  icon: {
    color: colors.text[200],
  },
  clearButton: {
    marginLeft: 10,
    color: colors.text[100],
  },
});

export default CustomSearchBar;
