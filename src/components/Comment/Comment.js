import React from 'react';
import chevron from '../../images/icons/Caret-Right.svg';
import './Comment.css'

function Comment(props) {
  const {parent, by, text, time, storyId} = props
  const rootComment = parent === storyId;
  const ChevronButton = () => {
    return (rootComment &&
      (<button className="comment__button">
        <img src={chevron} alt="Icon chevron"/>
      </button>)
    )
  }

  return (
    <div className="comment__container">
      <div className="comment__caption-container">
        <p className="comment__caption">
          {by}
        </p>
        <p className="comment__caption">
          {time}
        </p>
      </div>
      <div className="comment__wrapper">
        <ChevronButton/>
        <p className="comment">
          {text}
        </p>
      </div>
    </div>
  );
}

export default Comment;
