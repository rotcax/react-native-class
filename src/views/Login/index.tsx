import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { connect } from 'react-redux';
import { login } from '../../store/actions';
import styles from './styles';
import { bindActionCreators } from 'redux';

// const Login = ({ counter: { count }, action, navigation }: any) => (
//   <View style={styles.container}>
//     <Text>Login!</Text>
//     <TouchableOpacity onPress={() => action.increment(count)}>
//       <Text>+</Text>
//     </TouchableOpacity>
//     <Text>{count}</Text>
//     <TouchableOpacity onPress={() => navigation.navigate('dashboard')}>
//       <Text>-</Text>
//     </TouchableOpacity>
//     <StatusBar style="auto" />
//   </View>
// );

const Login = ({ action, navigation, auth: { isAuth } }: any) => {
  useEffect(() => {
    if(isAuth) {
      navigation.navigate('dashboard');
    }
  }, [isAuth])

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => action.login({})}>
        <Text>Login</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  )
}

const mapStateToProps = ({ auth }: any) => ({ auth })

const mapDispatchToProps = (dispatch: any) => {
  const actions = {
    login
  }

  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
