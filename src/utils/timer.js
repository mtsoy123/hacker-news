import {fetchStories} from '../store/actions/actions';

let timer = (time, func) => {
  window.setInterval(() => {
    func(fetchStories())
  }, time);
  return () => {
    window.clearInterval(timer);
  };
}

export default timer;
