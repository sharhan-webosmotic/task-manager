import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome'
const RegisterScreen = () => {
  return (
    <View style={styles.container}>
                <Image style={styles.logo} source={require('../assets/logo.png')} />

      <Text style={styles.heading}>No account yet</Text>
      <Text style={styles.subHeading}>
        Sign up and start making developments easier
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#888"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Role"
        placeholderTextColor="#888"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>or</Text>

      <TouchableOpacity style={styles.socialButton}>
      <Icon name="google" size={20} color='red' />  
        <Text style={styles.socialButtonText}> Continue with Google</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialButtonText}>Continue with Apple</Text>
      </TouchableOpacity> */}

      <Text style={styles.footerText}>
        By clicking continue, you agree to our{' '}
        <Text style={styles.linkText}>Terms of Service</Text> and{' '}
        <Text style={styles.linkText}>Privacy Policy</Text>.
      </Text>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // alignItems:'center',
    justifyContent: 'center',
    backgroundColor: Colors.background,
  },
  logo: {
    alignSelf:'center',
    width: 200,
    height: 200,
    backgroundColor:Colors.primary,
    resizeMode: 'contain',
    marginBottom: 30,
},
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.text,
    marginBottom: 8,
  },
  subHeading: {
    fontSize: 16,
    textAlign: 'center',
    color: Colors.textLight,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  signInButton: {
    height: 40,
    backgroundColor: Colors.primary,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  signInText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    color: Colors.textLight,
    marginVertical: 10,
  },
  socialButton: {
    height: 50,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    flexDirection:'row',
    justifyContent: 'center',
    gap:5,
    alignItems: 'center',
    marginBottom: 10,
  },
  socialButtonText: {
    color: Colors.text,
    fontSize: 16,
  },
  footerText: {
    fontSize: 12,
    textAlign: 'center',
    color: Colors.textLight,
    marginTop: 20,
  },
  linkText: {
    color: Colors.primary,
    textDecorationLine: 'underline',
  },
});
