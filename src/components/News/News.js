import React from 'react';
import './News.css'
import user from '../../images/icons/User.svg'
import clock from '../../images/icons/Clock.svg'
import like from '../../images/icons/Heart.svg'
import {useHistory} from 'react-router-dom';

function News(props) {
  const NewsType = props.page === 'feed' ? 'li' : 'article'

  const history = useHistory();

  function handleClick() {
    history.push('/news/')
  }

  return (
    <NewsType
      className={`news news_type_${props.page}`}
      onClick={handleClick}
    >
      <div className="news__caption-wrapper">
        <div className="news__caption-container">
          <img className="news__icon" src={user} alt="Icon user"/>
          <p className="news__caption">
            Nickname
          </p>
        </div>
        <div className="news__caption-container">
          <img className="news__icon" src={clock} alt="Icon clock"/>
          <p className="news__caption">
            4 hours ago
          </p>
        </div>
      </div>
      <h2 className={`news__header news__header_type_${props.page}`}>
        Accidental Google Pixel Lock Screen Bypass
      </h2>
      <div className="news__caption-container">
        <img className="news__icon" src={like} alt="Icon like"/>
        <p className="news__caption">
          200 points
        </p>
      </div>
    </NewsType>
  );
}

export default News;
