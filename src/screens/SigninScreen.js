import React, { useContext } from 'react'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { View, Text, StyleSheet } from 'react-native'
import { Context } from '../context/AuthContext'

const SigninScreen = () => {

  const { state, signin } = useContext(Context)

  return (
    <View style={styles.container}>
      <AuthForm
        headerText='Sign in to your account'
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText="Sign in"
      />
      <NavLink text="Don't have an account? Sign up instead" routeName="Signup" />
    </View>
  )

}

SigninScreen.navigationOptions = {
  headerShown: false
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  }
})

export default SigninScreen