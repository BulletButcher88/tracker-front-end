import React, { useState, useContext } from 'react'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { View, StyleSheet } from 'react-native'

import { Context as AuthContext } from '../context/AuthContext'

const SignupScreen = ({ navigation }) => {

  const { state, signup } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  return <View style={styles.container}>
    <Spacer>
      <Text h3 >Sign up for Tracker</Text>
      <Spacer />
      <Input
        autoCapitalize='none'
        autoCorrect={false}
        label="Email"
        value={email}
        onChangeText={setEmail} />
      <Input
        secureTextEntry
        autoCapitalize='none'
        autoCorrect={false}
        label="Password"
        value={password}
        onChangeText={setPassword} />
      {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
      <Spacer>
        <Button title="Sign Up" onPress={() => signup({ email, password })} />
      </Spacer>
    </Spacer>

  </View>
}

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200
  },
  errorMessage: {
    color: 'red'
  }
})

export default SignupScreen