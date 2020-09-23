import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './styles';

const Login = ({ navigation }: any) => (
    <View style={styles.container}>
      <Text>Login!</Text>
      <TouchableOpacity onPress={() => navigation.navigate('dashboard')}>
        <Text>Press</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
);

export default Login;
