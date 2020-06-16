import React, { useContext } from 'react'
import { View, StyleSheet, } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import AuthFrom from '../components/AuthForm'
import { Context as AuthContext } from '../context/AuthContext'
import NavLink from '../components/NavLink'

const SignupScreen = ({ navigation }) => {

  const { state, signup, clearErrorMessage } = useContext(AuthContext)


  return (
    <View style={styles.container}>
      <NavigationEvents
        onWillBlur={clearErrorMessage}
      />
      <AuthFrom
        headerText='Sign Up for Tracker'
        errorMessage={state.errorMessage}
        onSubmit={signup}
        submitButtonText="Sign Up"
      />
      <NavLink
        routeName='Signin'
        text='Already have an account? Sign in here'
      />
    </View>
  )
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
    marginBottom: 200,
  }
})

export default SignupScreen