import React from 'react';
import refresh from '../../images/icons/Refresh.svg'
import chevron from '../../images/icons/Caret-Right.svg'
import './Discussion.css'

function Discussion(props) {
  return (
    <section className='discussion'>
      <div className='discussion__header-container'>
        <h3 className='discussion__header'>
          Discussion
        </h3>
        <p className='discussion__caption'>
          (2900 comments)
        </p>
        <button className='discussion__button'>
          <img src={refresh} alt='Icon refresh'/>
        </button>
      </div>

      <div className='discussion__comment-container'>
        <div className='discussion__comment-caption-container'>
          <p className='discussion__comment-caption'>
            Nickname
          </p>
          <p className='discussion__comment-caption'>
            4 hours ago
          </p>
        </div>
        <div className='discussion__comment-wrapper'>
          <button className='discussion__button'>
            <img src={chevron} alt='Icon chevron'/>
          </button>
          <p className='discussion__comment'>
            Show HN: Hstream – quick Python web apps (Streamlit alternative using htmx)
          </p>
        </div>
      </div>
    </section>
  );
}

export default Discussion;
