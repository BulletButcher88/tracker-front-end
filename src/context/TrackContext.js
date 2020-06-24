import createDataContext from './createDataContext'
import trackApi from '../api/tracker'

const trackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const fetchTrack = dispatch => () => {
}

const createTrack = dispatch => async (name, locations) => {
  await trackApi.post('/tracks', { name, locations })
}

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTrack, createTrack },
  []
)