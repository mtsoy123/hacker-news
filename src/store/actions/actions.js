import {
  commentFetched,
  commentFetching,
  commentFetchingError,
  storiesFetched,
  storiesFetching,
  storiesFetchingError
} from '../../utils/constants/constants';
import {api} from '../../utils/Api';

export const fetchStories = () => (dispatch) => {
  dispatch(storiesFetchingAction());
  api.getLatestStories(100)
  .then(res => dispatch(storiesFetchedAction(res)))
  .catch(() => dispatch(storiesFetchingErrorAction()))
};

export const fetchComments = (kidsArray) => (dispatch) => {
  dispatch(commentsFetchingAction())
  api.getComments(kidsArray)
  .then(res => dispatch(commentsFetchedAction(res)))
  .catch(() => dispatch(commentsFetchingErrorAction()))
}

export const storiesFetchingAction = () => {
  return {
    type: storiesFetching
  }
}

export const storiesFetchedAction = (stories) => {
  return {
    type: storiesFetched,
    payload: stories
  }
}

export const storiesFetchingErrorAction = () => {
  return {
    type: storiesFetchingError,
  }
}

export const commentsFetchingAction = () => {
  return {
    type: commentFetching
  }
}

export const commentsFetchedAction = (comments) => {
  return {
    type: commentFetched,
    payload: comments
  }
}

export const commentsFetchingErrorAction = () => {
  return {
    type: commentFetchingError,
  }
}
