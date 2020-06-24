import React, { useContext, useEffect } from 'react'
import { Text, StyleSheet, ActivityIndicator } from 'react-native'
import MapView, { Polyline, Circle } from 'react-native-maps'
import { Context as LocationContext } from '../context/LocationContext'

const Map = () => {

  const { state: { currentLocation, locations } } = useContext(LocationContext)

  if (!currentLocation) {
    return <ActivityIndicator size='large' style={{ marginTop: 200 }} />
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.015,
        longitudeDelta: 0.015
      }}
    >
      <Circle
        radius={20}
        strokeColor='rgba(158, 158, 255, 1.0)'
        fillColor='rgba(158, 158, 255, 0.4)'
        center={currentLocation.coords} />
      <Polyline coordinates={locations.map(loc => loc.coords)} />
    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    height: 300
  }
})

export default Map