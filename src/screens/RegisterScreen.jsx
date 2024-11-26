import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import { colors } from '../constants/colors';
import {navigate} from '../navigators/RootNavigation';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import CustomDropdown from '../components/CustomDropdown';

const RegisterScreen = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });

  const roles = [
    { id: 'developer', name: 'Developer' },
    { id: 'designer', name: 'Designer' },
    { id: 'product_manager', name: 'Product Manager' },
    { id: 'other', name: 'Other' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />

      <Text style={styles.heading}>Create Account</Text>
      <TouchableOpacity onPress={() => navigate('Login')}>
        <Text style={styles.subHeading}>
          Already have an account? Sign in
        </Text>
      </TouchableOpacity>

      <View style={styles.form}>
        <CustomInput
          label="Full Name"
          placeholder="Enter your full name"
          value={formData.name}
          onChangeText={(text) => setFormData({...formData, name: text})}
        />

        <CustomInput
          label="Email"
          placeholder="Enter your email"
          value={formData.email}
          onChangeText={(text) => setFormData({...formData, email: text})}
        />

        <CustomInput
          label="Password"
          placeholder="Create a password"
          secureTextEntry
          value={formData.password}
          onChangeText={(text) => setFormData({...formData, password: text})}
        />

        <CustomDropdown
          label="Role"
          placeholder="Select your role"
          value={formData.role}
          onChange={(value) => setFormData({...formData, role: value})}
          options={roles}
        />

        <CustomButton
          style={styles.signUpButton}
          onPress={() => navigate('Home')}>
          Create Account
        </CustomButton>
      </View>

      <Text style={styles.footerText}>
        By creating an account, you agree to our{' '}
        <Text style={styles.linkText}>Terms of Service</Text> and{' '}
        <Text style={styles.linkText}>Privacy Policy</Text>.
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background[100],
    padding: 20,
  },
  logo: {
    alignSelf: 'center',
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginTop: 20,
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.text[100],
    marginBottom: 4,
  },
  subHeading: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.text[200],
    marginBottom: 20,
  },
  form: {
    gap: 12,
  },
  signUpButton: {
    marginTop: 4,
    backgroundColor: colors.accent[100],
  },
  footerText: {
    fontSize: 12,
    textAlign: 'center',
    color: colors.text[200],
    marginTop: 'auto',
    marginBottom: 16,
  },
  linkText: {
    color: colors.accent[100],
    textDecorationLine: 'underline',
  },
});

export default RegisterScreen;
