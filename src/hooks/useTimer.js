import { useState, useRef } from 'react';


export default function useTimer(initDuration,submit){

    const countUpRef = useRef(null);
    const countDownRef = useRef(null);
    const [timer,setTimer] = useState(0);
    const [isPaused,setIsPaused] = useState(false);
    const [duration,setDuration] = useState(0);
  
    const start = ()=>{
      setTimer((Date.now() + (1000*60*initDuration)) - Date.now())
      countDownRef.current = countDown();
    }
  
    function countDown(){
      return setInterval(() => {
        setTimer((timer) => timer - 1000)
      }, 1000);
    }
  
    function countUp(){
      return setInterval(() => {
        setDuration((duration) => duration + 1000);
      }, 1000);
    }
  
    const pause = ()=>{
      clearInterval(countDownRef.current);
      countUpRef.current = countUp();
      setIsPaused(true)
    }
  
    const resume = ()=>{
      clearInterval(countUpRef.current);
      setTimer(duration - Date.now());
      countDownRef.current = countDown();
      setIsPaused(false);
    }
  
    const formatTime = (distance) => {
      const days = "0"+(Math.floor(distance / (1000 * 60 * 60 * 24)))+"".slice(-2);
      const hours = `0${Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}`.slice(-2);
      const minutes = `0${Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))}`.slice(-2);
      const seconds = `0${Math.floor((distance % (1000 * 60)) / 1000)}`.slice(-2);
    
      return {seconds, minutes, hours, days}
    }
  
    return {
      pause, start, resume, timer, formatTime, isPaused
    }
  }