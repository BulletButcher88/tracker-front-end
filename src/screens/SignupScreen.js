import React from 'react'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { View, StyleSheet } from 'react-native'

const SignupScreen = ({ navigation }) => {

  return <View style={styles.container}>
    <Spacer>
      <Text h3 >Sign up for Tracker</Text>
      <Spacer />
      <Input label="Email" />
      <Input label="Password" />
      <Spacer>
        <Button title="Sign Up" onPress={() => { navigation.navigate('Signin') }} />
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
  }
})

export default SignupScreen