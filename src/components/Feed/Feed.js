import React, {useEffect} from 'react';
import './Feed.css'
import Story from '../Story/Story';
import refresh from '../../images/icons/Refresh.svg'
import {useDispatch, useSelector} from 'react-redux';
import {fetchStories,} from '../../store/actions/actions';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function Feed() {

  const dispatch = useDispatch();
  const storiesList = useSelector(state => state.story);
  const storiesIsLoading = useSelector(state => state.story.storiesLoadingStatus)
  let timer;

  useEffect(() => {
    dispatch(fetchStories())
  }, [dispatch])

  useEffect(() => {
    timer = window.setInterval(() => {
      dispatch(fetchStories())
    }, 60000);
    return () => {
      window.clearInterval(timer);
    };
  }, []);

  if (storiesIsLoading === 'loading') {
    return (<Loader/>);
  } else if (storiesIsLoading === 'error') {
    return (<ErrorMessage/>)
  }

  function onClick() {
    dispatch(fetchStories())
  }

  return (
    <main className="feed">
      <ul className="feed__header">
        News
        <button onClick={onClick} className="feed__button">
          <img src={refresh} alt="Icon refresh"/>
        </button>
      </ul>
      {
        storiesList.stories.map(({...props}, index) => {
          return (
            <Story
              page="feed"
              key={index}
              {...props}
            >
            </Story>
          )
        })
      }
    </main>
  );
}

export default Feed;
