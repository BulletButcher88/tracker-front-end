import '../_mockLocation'
import React, { useEffect, useState, useContext } from 'react'

import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import Map from '../components/Map'
import { Context as LocationContext } from '../context/LocationContext'
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location'

const TrackScreen = () => {

  const { addLocation } = useContext(LocationContext)
  const [err, setErr] = useState(null)

  const startWatching = async () => {
    try {
      await requestPermissionsAsync()
      await watchPositionAsync({
        accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10
      }, (location) => {
        addLocation(location)
      })
    } catch (err) {
      setErr(err)
    }
  }

  useEffect(() => { startWatching() }, [])

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

export default TrackScreen