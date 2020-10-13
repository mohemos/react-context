import React from 'react';
import {useTimer} from './utils/hooks';

export default ()=>{
  const {resume,pause,start,timer,isPaused,formatTime} = useTimer(0.1,cb);

  const {seconds, minutes, hours, days} = formatTime(timer);

  async function cb(){
    alert("Yes")
  }

  return <div>
    {seconds} : {minutes} : {hours} : {days}
    <button onClick={()=>start()}>Start</button>
    <button onClick={()=>pause()}>pause</button>
    <button onClick={()=>resume()}>Resume</button>
  </div>
}