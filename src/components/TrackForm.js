import React, { useContext } from 'react'
import { Input, Button } from 'react-native-elements'
import Spacer from './Spacer'
import { Context as LocationContext } from '../context/LocationContext'

const TrackFrom = () => {
  const { state: { name, recording, locations }, startRecording, stopRecording, changeName } = useContext(LocationContext)

  console.log("location array length in TrackFrom", locations.length)

  return <>
    <Spacer>
      <Input
        placeholder="Enter name for track"
        value={name}
        onChangeText={changeName}
      />
    </Spacer>

    {recording ?
      <Button
        style={{
          marginLeft: 20, marginRight: 20, borderColor: 'red', borderWidth: 5, borderRadius: 15
        }}
        title="Stop"
        onPress={stopRecording}
      /> :
      <Button
        style={{ marginLeft: 20, marginRight: 20 }}
        title="Start Recording"
        onPress={startRecording}
      />
    }

  </>
}


export default TrackFrom