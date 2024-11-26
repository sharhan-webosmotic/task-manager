import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../constants/colors';
import {navigate} from '../navigators/RootNavigation';

const CustomBottomTab = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <View style={styles.iconContainer}>
            <Icon name="home" size={24} color={colors.primary} />
          </View>
          <Text style={styles.activeTabText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tab}>
          <View style={styles.iconContainer}>
            <Icon name="notifications" size={24} color={colors.text[300]} />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>2</Text>
            </View>
          </View>
          <Text style={styles.tabText}>Alerts</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigate('AddTask')}
          style={styles.addButtonContainer}>
          <View style={styles.addButton}>
            <Icon name="add" size={28} color={colors.accent[100]} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tab}>
          <View style={styles.iconContainer}>
            <Icon name="person" size={24} color={colors.text[300]} />
          </View>
          <Text style={styles.tabText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tab} onPress={() => navigate('Login')}>
          <View style={styles.iconContainer}>
            <Icon name="logout" size={24} color={colors.text[300]} />
          </View>
          <Text style={styles.tabText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background[200],
    paddingBottom: 4,
  },
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
    backgroundColor: colors.text[300],
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
    backgroundColor: colors.text[300],
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
    borderWidth: 4,
    borderColor: colors.background[200],
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
    color: colors.text[100],
    fontSize: 11,
    marginTop: 2,
    fontWeight: '600',
  },
  tabText: {
    color: colors.text[300],
    fontSize: 11,
    marginTop: 2,
  },
});

export default CustomBottomTab;
