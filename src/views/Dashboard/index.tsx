import React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './styles';

const Dashboard = (props: any) => (
    <View style={styles.container}>
      <Text>Main!</Text>
      <StatusBar style="auto" />
    </View>
);

export default Dashboard;
