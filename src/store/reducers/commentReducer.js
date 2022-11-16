import {
  commentFetched,
  commentFetching,
  commentFetchingError
} from '../../utils/constants/constants';

const initialState = {
  comments: [],
  commentsLoadingStatus: 'idle'
}

const comment = (state = initialState, action) => {
  switch (action.type) {
    case commentFetching:
      return {
        ...state,
        commentsLoadingStatus: 'loading'
      }
    case commentFetched: {
      return {
        ...state,
        commentsLoadingStatus: 'idle',
        comments: action.payload
      }
    }
    case commentFetchingError:
      return {
        ...state,
        commentsLoadingStatus: 'error'
      }
    default:
      return state
  }
}

export default comment
