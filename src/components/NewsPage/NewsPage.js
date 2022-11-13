import React from 'react';
import './NewsPage.css'
import Discussion from '../Discussion/Discussion';
import refresh from '../../images/icons/Refresh.svg'
import back from '../../images/icons/Arrow-Left.svg'
import News from '../News/News';

function NewsPage(props) {
  return (
    <main className='newsPage'>

        <button className='newsPage__navigation newsPage__button'>
          <img src={back} alt='Icon back'/>
          <p className='newsPage__header'>
            Back
          </p>
        </button>


      <News page='newsPage'>

      </News>

      <Discussion ></Discussion>
    </main>
  );
}

export default NewsPage;
