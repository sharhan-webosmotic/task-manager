import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  TextInput,
} from 'react-native';
import {colors, tagColors} from '../constants/colors';
import CustomButton from '../components/CustomButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useState} from 'react';
import {navigate} from '../navigators/RootNavigation';
import CustomBottomTab from '../components/CustomBottomTab';

const HomeScreen = () => {
  const [isProjectDropdownOpen, setIsProjectDropdownOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState({
    id: '1',
    name: 'Mobile App Development',
  });
  const [activeTab, setActiveTab] = useState('tasks');

  const projects = [
    {id: '1', name: 'Mobile App Development'},
    {id: '2', name: 'Web Dashboard'},
    {id: '3', name: 'API Integration'},
  ];

  const dummyTasks = [
    {
      id: '1',
      title: 'Implement User Authentication',
      description: 'Add login and signup functionality with JWT',
      assignee: 'Mohd Sharhan',
      tags: ['Frontend', 'Priority'],
      completed: false,
    },
    {
      id: '2',
      title: 'Implement User Authentication',
      description: 'Add login and signup functionality with JWT',
      assignee: 'Mohd Sharhan',
      tags: ['Frontend', 'Priority'],
      completed: false,
    },
    {
      id: '3',
      title: 'Implement User Authentication',
      description: 'Add login and signup functionality with JWT',
      // assignee: 'Mohd Sharhan',
      tags: ['Frontend', 'Priority'],
      completed: false,
    },
    // ... more tasks
  ];

  const renderTaskItem = ({item}) => (
    <View style={styles.taskItem}>
      <View style={styles.taskHeader}>
        <TouchableOpacity
          style={[
            styles.completeButton,
            item.completed && styles.completeButtonActive,
          ]}
          onPress={() => handleTaskCompletion(item.id)}>
          <Icon
            name={item.completed ? 'check' : 'check'}
            size={20}
            color={item.completed ? colors.text[100] : colors.text[200]}
          />
        </TouchableOpacity>
        <View style={styles.taskTitleContainer}>
          <Text
            style={[
              styles.taskTitle,
              item.completed && styles.taskTitleCompleted,
            ]}>
            {item.title}
          </Text>
          {item.tags.length > 0 && (
            <View style={styles.tagsContainer}>
              {item.tags.map((tag, index) => (
                <View
                  key={index}
                  style={[
                    styles.tag,
                    {backgroundColor: tagColors[tag] || colors.background[200]},
                  ]}>
                  <Text style={styles.tagText}>{tag}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
      </View>

      <Text style={styles.taskDescription}>{item.description}</Text>

      <View style={styles.taskActions}>
        {item.assignee ? (
          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.assigneeContainer}>
              <View style={styles.assigneeAvatar}>
                <Text style={styles.avatarText}>
                  {item.assignee
                    .split(' ')
                    .map(name => name[0])
                    .join('')}
                </Text>
              </View>
              <Text style={styles.assigneeText} numberOfLines={1}>
                {item.assignee}
              </Text>
              <Icon
                name="keyboard-arrow-down"
                size={16}
                color={colors.text[100]}
              />
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.actionButton}>
            <Icon name="person-add" size={20} color={colors.accent[100]} />
            <Text style={styles.actionText}>Assign</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity style={styles.actionButton}>
          <Icon name="local-offer" size={20} color={colors.tag[100]} />
          <Text style={styles.tagsOption}>Tags</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Icon name="more-horiz" size={20} color={colors.text[200]} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'tasks' && styles.activeTab]}
            onPress={() => setActiveTab('tasks')}>
            <Icon
              name="list"
              size={20}
              color={activeTab === 'tasks' ? 'white' : colors.text[100]}
            />
            <Text
              style={activeTab === 'tasks' ? styles.activeTabText : styles.tabText}>
              Tasks
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'team' && styles.activeTab]}
            onPress={() => setActiveTab('team')}>
            <Icon
              name="people"
              size={20}
              color={activeTab === 'team' ? 'white' : colors.text[100]}
            />
            <Text
              style={activeTab === 'team' ? styles.activeTabText : styles.tabText}>
              Team
            </Text>
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

      <View style={styles.addTaskContainer}>
        <CustomButton
          onPress={() => {
            navigate('AddTask');
          }}
          icon="add-task"
          variant="solid"
          textColor={colors.text[100]}
          style={styles.addButton}>
          New Task
        </CustomButton>
      </View>

      <FlatList
        data={dummyTasks}
        renderItem={renderTaskItem}
        keyExtractor={item => item.id}
        style={styles.taskList}
        contentContainerStyle={styles.taskListContent}
      />

      <CustomBottomTab />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background[100],
  },
  addTaskContainer: {
    padding: 16,
    backgroundColor: colors.background[200],
    borderBottomWidth: 1,
    borderBottomColor: colors.background[300],
  },
  addButton: {
    borderRadius: 12,
    backgroundColor: colors.accent[100],
  },
  taskList: {
    flex: 1,
    backgroundColor: colors.background[100],
  },
  taskItem: {
    backgroundColor: colors.background[200],
    marginBottom: 12,
    padding: 16,
    borderRadius: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: colors.background[300],
  },
  taskHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  completeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.background[300],
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  completeButtonActive: {
    backgroundColor: colors.primary[100],
  },
  taskTitleContainer: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '500',
    flex: 1,
    color: colors.text[100],
  },
  taskTitleCompleted: {
    textDecorationLine: 'line-through',
    color: colors.text[200],
  },
  taskDescription: {
    marginTop: 8,
    color: colors.text[200],
  },
  taskActions: {
    flexDirection: 'row',
    marginTop: 12,
    borderTopWidth: 1,
    borderTopColor: colors.background[300],
    paddingTop: 12,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  actionText: {
    marginLeft: 4,
    color: colors.accent[100],
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 4,
  },
  tag: {
    backgroundColor: colors.background[300],
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: 8,
    marginTop: 4,
  },
  tagText: {
    fontSize: 12,
    color: colors.text[100],
  },
  taskListContent: {
    padding: 16,
  },
  assigneeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background[300],
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
    // borderWidth: 1,
    // borderColor: colors.primary[100],
  },
  assigneeAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.primary[200],
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  avatarText: {
    color: colors.text[100],
    fontSize: 12,
    fontWeight: '600',
  },
  assigneeText: {
    color: colors.text[100],
    fontSize: 14,
    marginRight: 4,
    maxWidth: 100,
  },
  tagsOption: {
    color: colors.tag[100],
    fontSize: 14,
    marginRight: 4,
    maxWidth: 100,
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

export default HomeScreen;
