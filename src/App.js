import React from 'react';
import { formatTime } from './utils';
import {useTimer} from './utils/hooks';

export default ()=>{
  const {resume,pause,start,timer,isPaused} = useTimer(10);

  const {seconds, minutes, hours, days} = formatTime(timer);

  return <div>
    {seconds} : {minutes} : {hours} : {days}
    <button onClick={()=>start()}>Start</button>
    <button onClick={()=>pause()}>pause</button>
    <button onClick={()=>resume()}>Resume</button>
  </div>
}