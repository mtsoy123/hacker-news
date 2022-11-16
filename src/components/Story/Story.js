import React from 'react';
import './Stories.css'
import user from '../../images/icons/User.svg'
import clock from '../../images/icons/Clock.svg'
import like from '../../images/icons/Heart.svg'
import {Link} from 'react-router-dom';
import {convertTime} from '../../utils/dateHandler';

function Story(props) {

  const {title, score, by, time, url, page, kids} = props;
  const StoryType = page === 'feed' ? 'li' : 'article';
  const link = encodeURIComponent(title);
  const ConditionalWrapper = ({wrapper, children}) =>
    page === 'feed' ? wrapper(children) : children;

  return (
    <StoryType
      className={`story story_type_${props.page}`}
    >
      <ConditionalWrapper
        wrapper={children => <Link className="story__container" to={`/${link}`}>{children}</Link>}
      >
        <div className="story__caption-wrapper">
          <div className="story__caption-container">
            <img className="story__icon" src={user} alt="Icon user"/>
            <p className="story__caption">
              {by}
            </p>
          </div>
          <div className="story__caption-container">
            <img className="story__icon" src={clock} alt="Icon clock"/>
            <p className="story__caption">
              {convertTime(time)}
            </p>
          </div>
          <div className="story__caption-container">
            <img className="story__icon" src={like} alt="Icon like"/>
            <p className="story__caption">
              {score}
            </p>
          </div>
        </div>
        <h2 className={`story__header story__header_type_${props.page}`}>
          {title}
        </h2>
        {page !== 'feed' && <a className="story__link" href={url}>{url}</a>}
      </ConditionalWrapper>
    </StoryType>
  );
}

export default Story;
