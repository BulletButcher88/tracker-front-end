import React from 'react'

import { View, Text, StyleSheet, Button } from 'react-native'

const TrackListScreen = ({ navigation }) => {

  return <>
    <Text style={{ fontSize: 40 }}>TRACK LIST SCREEN</Text>
    <Button title="Go to TrackDetail" onPress={() => { navigation.navigate('TrackDetail') }} />

  </>
}



const styles = StyleSheet.create({

})

export default TrackListScreen