import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../constants/colors';
import CustomButton from '../components/CustomButton';
import CustomBottomTab from '../components/CustomBottomTab';

const ProfileScreen = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    role: 'Senior Developer',
    profileImage: null,
  });

  const [userTasks, setUserTasks] = useState([
    {
      id: '1',
      title: 'Implement User Authentication',
      status: 'In Progress',
      dueDate: '2024-03-20',
    },
    {
      id: '2',
      title: 'Fix Navigation Bug',
      status: 'Pending',
      dueDate: '2024-03-22',
    },
    {
      id: '3',
      title: 'Update API Documentation',
      status: 'Completed',
      dueDate: '2024-03-18',
    },
  ]);

  const [userProjects] = useState([
    {
      id: '1',
      name: 'Task Management App',
      role: 'Lead Developer',
      progress: 75,
      teamSize: 5,
    },
    {
      id: '2',
      name: 'E-commerce Platform',
      role: 'Frontend Developer',
      progress: 40,
      teamSize: 8,
    },
    {
      id: '3',
      name: 'Analytics Dashboard',
      role: 'Full Stack Developer',
      progress: 90,
      teamSize: 3,
    },
  ]);

  const getInitials = () => {
    return `${userInfo.firstName[0]}${userInfo.lastName[0]}`;
  };

  const handleImageUpload = () => {
    // Implement image picker functionality
    console.log('Upload image');
  };

  const handleSave = () => {
    setIsEditing(false);
    // Implement save functionality
    console.log('Save profile', userInfo);
  };

  const renderProfileImage = () => {
    if (userInfo.profileImage) {
      return (
        <Image
          source={{uri: userInfo.profileImage}}
          style={styles.profileImage}
        />
      );
    }
    return (
      <View style={styles.initialsContainer}>
        <Text style={styles.initialsText}>{getInitials()}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.profileImageContainer}
            onPress={handleImageUpload}>
            {renderProfileImage()}
            <View style={styles.uploadButton}>
              <Icon name="camera-alt" size={16} color={colors.text[100]} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.editButton}
            onPress={() => setIsEditing(!isEditing)}>
            <Icon
              name={isEditing ? 'close' : 'edit'}
              size={20}
              color={colors.text[100]}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.infoSection}>
          <View style={styles.infoRow}>
            <Text style={styles.label}>First Name</Text>
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={userInfo.firstName}
                onChangeText={text =>
                  setUserInfo({...userInfo, firstName: text})
                }
              />
            ) : (
              <Text style={styles.value}>{userInfo.firstName}</Text>
            )}
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Last Name</Text>
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={userInfo.lastName}
                onChangeText={text => setUserInfo({...userInfo, lastName: text})}
              />
            ) : (
              <Text style={styles.value}>{userInfo.lastName}</Text>
            )}
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Email</Text>
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={userInfo.email}
                onChangeText={text => setUserInfo({...userInfo, email: text})}
                keyboardType="email-address"
              />
            ) : (
              <Text style={styles.value}>{userInfo.email}</Text>
            )}
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Role</Text>
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={userInfo.role}
                onChangeText={text => setUserInfo({...userInfo, role: text})}
              />
            ) : (
              <Text style={styles.value}>{userInfo.role}</Text>
            )}
          </View>

          {isEditing && (
            <CustomButton
              style={styles.saveButton}
              onPress={handleSave}
              textColor={colors.text[100]}>
              Save Changes
            </CustomButton>
          )}
        </View>

        <View style={styles.projectsSection}>
          <Text style={styles.sectionTitle}>My Projects</Text>
          {userProjects.map(project => (
            <View key={project.id} style={styles.projectItem}>
              <View style={styles.projectHeader}>
                <Text style={styles.projectName}>{project.name}</Text>
                <View style={styles.teamSize}>
                  <Icon name="people" size={16} color={colors.text[300]} />
                  <Text style={styles.teamSizeText}>{project.teamSize}</Text>
                </View>
              </View>
              <Text style={styles.roleText}>{project.role}</Text>
              <View style={styles.progressContainer}>
                <View style={styles.progressBar}>
                  <View
                    style={[
                      styles.progressFill,
                      {width: `${project.progress}%`},
                    ]}
                  />
                </View>
                <Text style={styles.progressText}>{project.progress}%</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.tasksSection}>
          <Text style={styles.sectionTitle}>My Tasks</Text>
          {userTasks.map(task => (
            <View key={task.id} style={styles.taskItem}>
              <View style={styles.taskHeader}>
                <Text style={styles.taskTitle}>{task.title}</Text>
                <View
                  style={[
                    styles.statusBadge,
                    {
                      backgroundColor:
                        task.status === 'Completed'
                          ? colors.accent[100]
                          : task.status === 'In Progress'
                          ? colors.primary[100]
                          : colors.primary[200],
                    },
                  ]}>
                  <Text style={styles.statusText}>{task.status}</Text>
                </View>
              </View>
              <Text style={styles.taskDate}>Due: {task.dueDate}</Text>
            </View>
          ))}
          <CustomButton
            style={styles.showMoreButton}
            textColor={colors.text[100]}
            variant="outline">
            Show More
          </CustomButton>
        </View>
      </ScrollView>
      <CustomBottomTab />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background[100],
  },
  scrollView: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    padding: 20,
    position: 'relative',
  },
  profileImageContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  initialsContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: colors.primary[200],
    alignItems: 'center',
    justifyContent: 'center',
  },
  initialsText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: colors.text[100],
  },
  uploadButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: colors.accent[100],
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: colors.accent[100],
    padding: 8,
    borderRadius: 20,
  },
  infoSection: {
    padding: 20,
    backgroundColor: colors.background[200],
    borderRadius: 12,
    margin: 16,
  },
  infoRow: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: colors.text[300],
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    color: colors.text[100],
  },
  input: {
    fontSize: 16,
    color: colors.text[100],
    borderBottomWidth: 1,
    borderBottomColor: colors.accent[100],
    paddingVertical: 4,
  },
  saveButton: {
    marginTop: 20,
    backgroundColor: colors.accent[100],
  },
  tasksSection: {
    padding: 20,
    backgroundColor: colors.background[200],
    borderRadius: 12,
    margin: 16,
    marginTop: 0,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text[100],
    marginBottom: 16,
  },
  taskItem: {
    backgroundColor: colors.background[300],
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  taskHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  taskTitle: {
    fontSize: 16,
    color: colors.text[100],
    flex: 1,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    color: colors.text[100],
  },
  taskDate: {
    fontSize: 12,
    color: colors.text[300],
  },
  showMoreButton: {
    marginTop: 8,
  },
  projectsSection: {
    padding: 20,
    backgroundColor: colors.background[200],
    borderRadius: 12,
    margin: 16,
    marginTop: 0,
  },
  projectItem: {
    backgroundColor: colors.background[300],
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  projectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  projectName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text[100],
    flex: 1,
  },
  teamSize: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background[200],
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  teamSizeText: {
    color: colors.text[300],
    fontSize: 12,
    marginLeft: 4,
  },
  roleText: {
    fontSize: 14,
    color: colors.text[300],
    marginBottom: 12,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBar: {
    flex: 1,
    height: 4,
    backgroundColor: colors.background[200],
    borderRadius: 2,
    marginRight: 8,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.accent[100],
    borderRadius: 2,
  },
  progressText: {
    fontSize: 12,
    color: colors.text[300],
    width: 35,
  },
});

export default ProfileScreen; 