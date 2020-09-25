import React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './styles';
import { connect } from 'react-redux';

const Dashboard = ({ auth: { user } }: any) => (
    <View style={styles.container}>
      <Text>{ user.title }</Text>
      <StatusBar style="auto" />
    </View>
);

const mapStateToProps = ({ auth }: any) => ({ auth });

export default connect(mapStateToProps)(Dashboard);
