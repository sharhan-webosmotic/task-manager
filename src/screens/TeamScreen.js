import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../constants/colors';
import CustomHeader from '../components/CustomHeader';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TeamScreen = ({route}) => {
  // Mock data - replace with your actual data source
  const teamMembers = [
    {
      id: '1',
      name: 'John Doe',
      role: 'Project Manager',
      email: 'john.doe@example.com',
      avatar:
        'https://ui-avatars.com/api/?name=John+Doe&background=18BC9C&color=fff',
      status: 'online',
      tasks: 12,
      completedTasks: 8,
    },
    {
      id: '2',
      name: 'Jane Smith',
      role: 'Senior Developer',
      email: 'jane.smith@example.com',
      avatar:
        'https://ui-avatars.com/api/?name=Jane+Smith&background=4a9d9c&color=fff',
      status: 'offline',
      tasks: 15,
      completedTasks: 10,
    },
    // Add more team members as needed
  ];

  const renderMember = ({item}) => (
    <TouchableOpacity style={styles.memberCard}>
      <View style={styles.cardHeader}>
        <View style={styles.avatarContainer}>
          <Image source={{uri: item.avatar}} style={styles.avatar} />
          <View
            style={[
              styles.statusIndicator,
              {
                backgroundColor:
                  item.status === 'online'
                    ? colors.accent[100]
                    : colors.text[300],
              },
            ]}
          />
        </View>
        <View style={styles.memberInfo}>
          <Text style={styles.memberName}>{item.name}</Text>
          <Text style={styles.memberRole}>{item.role}</Text>
        </View>
        <TouchableOpacity style={styles.moreButton}>
          <Icon name="more-vert" size={24} color={colors.text[200]} />
        </TouchableOpacity>
      </View>

      <View style={styles.cardDivider} />

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Icon name="mail" size={20} color={colors.text[200]} />
          <Text style={styles.statText}>{item.email}</Text>
        </View>
        <View style={styles.statRow}>
          <View style={styles.statItem}>
            <Icon name="assignment" size={20} color={colors.primary[100]} />
            <Text style={styles.statText}>{item.tasks} Tasks</Text>
          </View>
          <View style={styles.statItem}>
            <Icon name="check-circle" size={20} color={colors.accent[100]} />
            <Text style={styles.statText}>{item.completedTasks} Completed</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={teamMembers}
        renderItem={renderMember}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity style={styles.fabButton}>
        <Icon name="person-add" size={24} color={colors.text[100]} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background[100],
  },
  listContainer: {
    padding: 16,
    paddingBottom: 80, // Extra padding for FAB
  },
  memberCard: {
    backgroundColor: colors.background[200],
    borderRadius: 16,
    marginBottom: 16,
    padding: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: colors.accent[100],
  },
  statusIndicator: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: colors.background[200],
  },
  memberInfo: {
    flex: 1,
    marginLeft: 12,
  },
  memberName: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text[100],
    marginBottom: 4,
  },
  memberRole: {
    fontSize: 14,
    color: colors.text[200],
  },
  moreButton: {
    padding: 4,
  },
  cardDivider: {
    height: 1,
    backgroundColor: colors.background[300],
    marginVertical: 12,
  },
  statsContainer: {
    gap: 12,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statText: {
    fontSize: 14,
    color: colors.text[200],
  },
  fabButton: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.accent[100],
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
});

export default TeamScreen;
