import {
  storiesFetching,
  storiesFetched,
  storiesFetchingError
} from '../../utils/constants/constants';

const initialState = {
  stories: [],
  storiesLoadingStatus: 'idle'
}

const story = (state = initialState, action) => {
  switch (action.type) {
    case storiesFetching:
      return {
        ...state,
        storiesLoadingStatus: 'loading'
      }
    case storiesFetched: {
      return {
        ...state,
        storiesLoadingStatus: 'idle',
        stories: action.payload
      }
    }
    case storiesFetchingError: {
      return {
        ...state,
        storiesLoadingStatus: 'error'
      }
    }
    default:
      return state
  }
}

export default story;
