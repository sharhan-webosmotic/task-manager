// CompletoHeader.js
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../constants/colors';

const CustomHeader = () => {
  const [isProjectDropdownOpen, setIsProjectDropdownOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState({
    id: '1',
    name: 'Mobile App Development',
  });

  const projects = [
    {id: '1', name: 'Mobile App Development'},
    {id: '2', name: 'Web Dashboard'},
    {id: '3', name: 'API Integration'},
    {id: '4', name: 'Backend Services'},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.projectSelector}
          onPress={() => setIsProjectDropdownOpen(!isProjectDropdownOpen)}>
          <Text style={styles.projectName}>{selectedProject.name}</Text>
          <Icon
            name={
              isProjectDropdownOpen
                ? 'keyboard-arrow-up'
                : 'keyboard-arrow-down'
            }
            size={24}
            color={colors.text[100]}
          />
        </TouchableOpacity>

        {isProjectDropdownOpen && (
          <View style={styles.dropdownMenu}>
            {projects.map(project => (
              <TouchableOpacity
                key={project.id}
                style={styles.dropdownItem}
                onPress={() => {
                  setSelectedProject(project);
                  setIsProjectDropdownOpen(false);
                }}>
                <Text style={styles.dropdownText}>{project.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>

      <View style={styles.tabContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={[styles.tab, styles.activeTab]}>
            <Icon name="list" size={20} color="white" />
            <Text style={styles.activeTabText}>Tasks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Icon name="people" size={20} color={colors.text[100]} />
            <Text style={styles.tabText}>Team</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Icon name="filter-list" size={20} color={colors.text[100]} />
            <Text style={styles.tabText}>Filters</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Icon name="timeline" size={20} color={colors.text[100]} />
            <Text style={styles.tabText}>Timeline</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background[200],
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    backgroundColor: colors.background[200],
    zIndex: 1000,
  },
  projectSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: colors.background[300],
    borderRadius: 12,
    // borderColor: colors.primary[100],
  },
  projectName: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text[100],
  },
  dropdownMenu: {
    position: 'absolute',
    top: 70,
    left: 16,
    right: 16,
    backgroundColor: colors.background[200],
    borderRadius: 12,
    padding: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: colors.background[300],
  },
  dropdownItem: {
    padding: 12,
    borderRadius: 8,
  },
  dropdownText: {
    fontSize: 16,
    color: colors.text[200],
  },
  tabContainer: {
    backgroundColor: colors.background[200],
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.background[300],
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginHorizontal: 4,
    borderRadius: 12,
    backgroundColor: colors.background[300],
    // borderColor: colors.primary[100],
  },
  activeTab: {
    backgroundColor: colors.accent[100],
    borderColor: colors.accent[100],
  },
  tabText: {
    marginLeft: 8,
    color: colors.text[100],
    fontWeight: '500',
  },
  activeTabText: {
    marginLeft: 8,
    color: 'white',
    fontWeight: '500',
  },
});

export default CustomHeader;
