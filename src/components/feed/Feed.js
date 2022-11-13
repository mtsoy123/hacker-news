import React from 'react';
import './Feed.css'
import News from '../News/News';
import refresh from '../../images/icons/Refresh.svg'

function Feed(props) {
  return (
    <main className='feed'>
      <h1 className='feed__header'>
        News
        <button className='feed__button'>
          <img src={refresh} alt='Icon refresh'/>
        </button>
      </h1>
      <News page='feed'></News>
      <News page='feed'></News>
    </main>
  );
}

export default Feed;
