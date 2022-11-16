import React, {useEffect} from 'react';
import './StoryPage.css'
import back from '../../images/icons/Arrow-Left.svg'
import Story from '../Story/Story';
import {useHistory, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {fetchStories} from '../../store/actions/actions';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function StoryPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  let {id} = useParams();
  const storiesList = useSelector(state => state.story);
  const storiesIsLoading = useSelector(state => state.story.storiesLoadingStatus)
  const currentStory = storiesList.stories.find((story) => {
    return story.title === decodeURIComponent(id)
  })


  useEffect(() => {
    dispatch(fetchStories())
  }, [dispatch])

  function goBack() {
    history.push('/')
  }

  if (storiesIsLoading === 'loading') {
    return (<Loader/>);
  } else if (storiesIsLoading === 'error') {
    return (<ErrorMessage/>)
  }

  return (
    <main className="storyPage">
      <button className="storyPage__navigation storyPage__button" onClick={goBack}>
        <img src={back} alt="Icon back"/>
        <p className="storyPage__header">
          Back
        </p>
      </button>
      <Story
        page="storyPage"
        {...currentStory}
      />
      {/*<Discussion></Discussion>*/}
    </main>
  );
}

export default StoryPage;
