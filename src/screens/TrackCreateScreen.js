import '../_mockLocation'
import React, { useContext } from 'react'

import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import Map from '../components/Map'
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation'

const TrackScreen = ({ isFocused }) => {

  const { addLocation } = useContext(LocationContext)
  const [err] = useLocation(isFocused, addLocation)

  return (<SafeAreaView forceInset={{ top: 'always' }}>
    <Text h2>Create Track</Text>
    <Map />
    {err ? <Text style={styles.err}>Please enable location service</Text> : null}
  </SafeAreaView>)

}



const styles = StyleSheet.create({
  err: {
    color: 'red'
  }
})

export default withNavigationFocus(TrackScreen)