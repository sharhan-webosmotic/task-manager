import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import {colors} from '../constants/colors';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomDropdown from '../components/CustomDropdown';
import CustomFormHeader from '../components/CustomFormHeader';

const tagColors = {
  Frontend: '#FF7676',    // Light red
  Backend: '#76A5FF',     // Light blue
  Priority: '#FFD876',    // Light yellow
  Bug: '#FF6B6B',        // Red
  Feature: '#92D36E',    // Light green
};

const TagInput = ({value = [], onChange}) => {
  const [inputText, setInputText] = useState('');
  const predefinedTags = ['Frontend', 'Backend', 'Priority', 'Bug', 'Feature'];

  const handleAddTag = tag => {
    if (tag && !value.includes(tag)) {
      onChange([...value, tag]);
    }
    setInputText('');
  };

  const handleRemoveTag = tagToRemove => {
    onChange(value.filter(tag => tag !== tagToRemove));
  };

  return (
    <View style={styles.tagInputContainer}>
      <View style={styles.selectedTags}>
        {value.map((tag, index) => (
          <View 
            key={index} 
            style={[
              styles.tag,
              { backgroundColor: tagColors[tag] || colors.background[300] }
            ]}>
            <Text style={[styles.tagText, { color: colors.text[300] }]}>{tag}</Text>
            <TouchableOpacity onPress={() => handleRemoveTag(tag)}>
              <Icon name="close" size={16} color={colors.text[300]} />
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <CustomInput
        placeholder="Add tags..."
        value={inputText}
        onChangeText={setInputText}
        onSubmitEditing={() => handleAddTag(inputText)}
      />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.predefinedTags}>
        {predefinedTags.map((tag, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.predefinedTag,
              { backgroundColor: tagColors[tag] || colors.background[200] }
            ]}
            onPress={() => handleAddTag(tag)}>
            <Text style={[styles.predefinedTagText, { color: colors.text[300] }]}>
              {tag}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const AddTaskScreen = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    assignee: '',
    tags: [],
  });

  const dummyTeamMembers = [
    {id: '1', name: 'John Doe', role: 'Developer'},
    {id: '2', name: 'Jane Smith', role: 'Designer'},
    {id: '3', name: 'Mike Johnson', role: 'Product Manager'},
    {id: '4', name: 'Sarah Wilson', role: 'Developer'},
  ];

  const handleSubmit = () => {
    console.log(formData);
    // Handle form submission
  };

  return (
    <View style={styles.container}>
      <CustomFormHeader title="Add Task" />
      <ScrollView style={styles.scrollView}>
        <CustomInput
          label="Task Title"
          placeholder="Enter task title"
          value={formData.title}
          onChangeText={text => setFormData({...formData, title: text})}
          placeholderTextColor={colors.text[200]}
        />

        <CustomInput
          label="Description"
          placeholder="Enter task description"
          multiline
          value={formData.description}
          onChangeText={text => setFormData({...formData, description: text})}
          placeholderTextColor={colors.text[200]}
        />

        <CustomDropdown
          label="Assignee"
          placeholder="Select team member"
          value={formData.assignee}
          onChange={value => setFormData({...formData, assignee: value})}
          options={dummyTeamMembers}
        />

        <View style={styles.tagSection}>
          <Text style={styles.label}>Tags</Text>
          <TagInput
            value={formData.tags}
            onChange={tags => setFormData({...formData, tags})}
          />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <CustomButton
          variant="outline"
          style={styles.footerButton}
          onPress={() => {}}>
          Cancel
        </CustomButton>
        <CustomButton
          textColor={colors.text[300]}
          style={styles.footerButton}
          onPress={handleSubmit}>
          Create Task
        </CustomButton>
      </View>
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
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text[100],
    marginBottom: 8,
  },
  tagInputContainer: {
    gap: 8,
  },
  selectedTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    gap: 4,
  },
  tagText: {
    fontSize: 14,
    fontWeight: '500',
  },
  predefinedTags: {
    flexDirection: 'row',
    marginTop: 8,
  },
  predefinedTag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    marginRight: 8,
  },
  predefinedTagText: {
    fontSize: 14,
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: colors.background[300],
    gap: 12,
    backgroundColor: colors.background[100],
  },
  footerButton: {
    flex: 1,
  },
});

export default AddTaskScreen;
