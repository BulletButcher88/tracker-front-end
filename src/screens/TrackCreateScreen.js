import React, { useEffect, useState } from 'react'

import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import Map from '../components/Map'
import { requestPermissionsAsync } from 'expo-location'

const TrackScreen = () => {
  const [err, setErr] = useState(null)

  const startWatching = async () => {
    try {
      await requestPermissionsAsync()
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