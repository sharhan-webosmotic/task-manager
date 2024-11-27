import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Animated,
  Dimensions,
} from 'react-native';
import {colors} from '../constants/colors';
import CustomBottomTab from '../components/CustomBottomTab';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SwipeListView } from 'react-native-swipe-list-view';

// Temporary mock data
const mockAlerts = [
  {
    id: '1',
    title: 'New Task Assigned',
    taskTitle: 'Implement User Authentication',
    assignedBy: 'John Doe',
    timestamp: '2h ago',
  },
  {
    id: '2',
    title: 'Task Update',
    taskTitle: 'Fix Navigation Bug',
    assignedBy: 'Jane Smith',
    timestamp: '5h ago',
  },
  // Add more mock alerts as needed
];

const AlertScreen = () => {
  const [alerts, setAlerts] = useState(mockAlerts);

  const clearAllAlerts = () => {
    setAlerts([]);
  };

  const deleteAlert = alertId => {
    setAlerts(prevAlerts => prevAlerts.filter(alert => alert.id !== alertId));
  };

  const renderHiddenItem = (data) => (
    <View style={styles.rowBack}>
      <View style={styles.rightSwipeActions}>
        <TouchableOpacity
          style={styles.deleteAction}
          onPress={() => deleteAlert(data.item.id)}>
          <Icon name="delete" size={24} color={colors.text[100]} />
          <Text style={styles.deleteActionText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.screenTitle}>Notifications</Text>
        {alerts.length > 0 && (
          <TouchableOpacity style={styles.clearButton} onPress={clearAllAlerts}>
            <Text style={styles.clearButtonText}>Clear All</Text>
          </TouchableOpacity>
        )}
      </View>

      {alerts.length > 0 ? (
        <SwipeListView
          data={alerts}
          renderItem={({ item }) => (
            <View style={styles.alertCard}>
              <View style={styles.alertHeader}>
                <View style={styles.alertTitleContainer}>
                  <Text style={styles.alertTitle}>{item.title}</Text>
                  <Text style={styles.timestamp}>{item.timestamp}</Text>
                </View>
              </View>
              <View style={styles.alertContent}>
                <Text style={styles.taskTitle}>{item.taskTitle}</Text>
                <Text style={styles.assignedBy}>Assigned by {item.assignedBy}</Text>
              </View>
            </View>
          )}
          renderHiddenItem={renderHiddenItem}
          rightOpenValue={-75}
          disableLeftSwipe={false}
          disableRightSwipe={true}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.alertsList}
        />
      ) : (
        <View style={styles.emptyState}>
          <Icon name="notifications-off" size={48} color={colors.text[300]} />
          <Text style={styles.emptyStateText}>No notifications</Text>
        </View>
      )}

      <CustomBottomTab />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background[100],
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.background[300],
  },
  screenTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text[100],
  },
  clearButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: colors.background[300],
  },
  clearButtonText: {
    color: colors.text[100],
    fontSize: 14,
    fontWeight: '500',
  },
  alertsList: {
    padding: 16,
  },
  alertCard: {
    backgroundColor: colors.background[200],
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: colors.accent[100],
  },
  alertHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  alertTitleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  alertTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text[100],
  },
  timestamp: {
    fontSize: 12,
    color: colors.text[300],
  },
  alertContent: {
    gap: 4,
  },
  taskTitle: {
    fontSize: 14,
    color: colors.text[200],
    fontWeight: '500',
  },
  assignedBy: {
    fontSize: 12,
    color: colors.text[300],
  },
  rowBack: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 12,
  },
  rightSwipeActions: {
    width: 75,
    height: '100%',
  },
  deleteAction: {
    backgroundColor: colors.primary[200],
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  deleteActionText: {
    color: colors.text[100],
    fontSize: 12,
    marginTop: 4,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  emptyStateText: {
    fontSize: 16,
    color: colors.text[300],
  },
});

export default AlertScreen;
