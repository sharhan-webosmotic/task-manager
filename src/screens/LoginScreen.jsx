import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors } from '../constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {navigate} from '../navigators/RootNavigation';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const LoginScreen = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />

      <Text style={styles.heading}>Welcome Back</Text>
      <TouchableOpacity onPress={() => navigate('Register')}>
        <Text style={styles.subHeading}>
          Don't have an account? Sign up now
        </Text>
      </TouchableOpacity>

      <View style={styles.form}>
        <CustomInput
          label="Email"
          placeholder="Enter your email"
          value={formData.email}
          onChangeText={(text) => setFormData({...formData, email: text})}
        />

        <CustomInput
          label="Password"
          placeholder="Enter your password"
          secureTextEntry
          value={formData.password}
          onChangeText={(text) => setFormData({...formData, password: text})}
        />

        <CustomButton
          onPress={() => navigate('Home')}
          style={styles.signInButton}>
          Sign In
        </CustomButton>
      </View>

      <Text style={styles.footerText}>
        By continuing, you agree to our{' '}
        <Text style={styles.linkText}>Terms of Service</Text> and{' '}
        <Text style={styles.linkText}>Privacy Policy</Text>.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background[100],
  },
  logo: {
    alignSelf: 'center',
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginTop: 60,
    marginBottom: 40,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.text[100],
    marginBottom: 8,
  },
  subHeading: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.text[200],
    marginBottom: 32,
  },
  form: {
    gap: 16,
  },
  signInButton: {
    marginTop: 8,
    backgroundColor: colors.accent[100],
  },
  footerText: {
    fontSize: 12,
    textAlign: 'center',
    color: colors.text[200],
    marginTop: 'auto',
    marginBottom: 20,
  },
  linkText: {
    color: colors.accent[100],
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
