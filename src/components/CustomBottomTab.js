import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../constants/colors';
import {navigate} from '../navigators/RootNavigation';
import {BOTTOM_TAB_OPTIONS} from '../constants/default';

const CustomBottomTab = () => {
  const renderTab = (option, isActive = false) => {
    if (option.isSpecial) {
      return (
        <TouchableOpacity
          key={option.id}
          onPress={() => navigate(option.route)}
          style={styles.addButtonContainer}>
          <View style={styles.addButton}>
            <Icon name={option.icon} size={28} color={colors.background[100]} />
          </View>
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity
        key={option.id}
        style={[styles.tab, isActive && styles.activeTab]}
        onPress={() => navigate(option.route)}>
        <View style={styles.iconContainer}>
          <Icon
            name={option.icon}
            size={24}
            color={isActive ? colors.background[100] : colors.text[100]}
          />
          {option.showBadge && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{option.badgeCount}</Text>
            </View>
          )}
        </View>
        <Text style={isActive ? styles.activeTabText : styles.tabText}>
          {option.label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.contentContainer}>
      {BOTTOM_TAB_OPTIONS.map((option, index) =>
        renderTab(option, index === 0),
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    backgroundColor: colors.accent[100],
    borderRadius: 30,
    padding: 6,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.primary[100],
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 3,
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: colors.text[100],
  },
  iconContainer: {
    position: 'relative',
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
  },
  addButtonContainer: {
    marginTop: -20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButton: {
    backgroundColor: colors.text[100],
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: colors.accent[100],
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: colors.primary[200],
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.primary[200],
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  activeTabText: {
    color: colors.background[100],
    fontSize: 12,
    marginTop: 2,
    fontWeight: '700',
  },
  tabText: {
    color: colors.text[100],
    fontWeight: '700',
    fontSize: 12,
    marginTop: 2,
  },
});

export default CustomBottomTab;
