import React, {useEffect} from 'react';
import refresh from '../../images/icons/Refresh.svg'
import './Discussion.css'
import Comment from '../Comment/Comment';
import {useDispatch, useSelector} from 'react-redux';
import {fetchComments} from '../../store/actions/actions';
import {useParams} from 'react-router-dom';

function Discussion() {

  const comment = useSelector(state => state.comment)
  const storiesList = useSelector(state => state.story)
  const dispatch = useDispatch();
  let {id} = useParams();

  const currentStory = storiesList.stories.find((story) => {
    return story.title === decodeURIComponent(id)
  })

  const commentsArr = Object.keys(currentStory).includes('kids')
    ? currentStory.kids
    : 0;

  useEffect(() => {
    if (commentsArr) {
      dispatch(fetchComments(commentsArr))
    }
  }, [dispatch])

  return (
    <section className="discussion">
      <div className="discussion__header-container">
        <h3 className="discussion__header">
          Discussion
        </h3>
        <p className="discussion__caption">
          {`(${commentsArr.length} comments)`
          }
        </p>
        <button className="discussion__button">
          <img src={refresh} alt="Icon refresh"/>
        </button>
      </div>
      {
        comment.comments.map(({...props}, index) => {
          return (
            <Comment
              key={index}
              storyId={currentStory.id}
              {...props}
            />)
        })
      }
    </section>
  );
}

export default Discussion;
