import { useState, useRef } from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#root');

export function useModal() {
  const [openModal, setOpenModal] = useState(false);

  const open = () => setOpenModal(true);
  const close = () => setOpenModal(false);
  const defaultStyle = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return { open, close, openModal, Panel: Modal, defaultStyle };
}

export function useTabContent(defaultContent = null) {
  const [content, setContent] = useState(defaultContent);

  const display = (newContent) => setContent(newContent);

  return { display, content };
}

export function useForm(submitAction) {
  const [values, setValue] = useState({});

  const getData = (e) => {
    setValue({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const setData = (field, data) => {
    values[field] = data;
    setValue({ ...values });
  };

  const submit = (e) => {
    e.preventDefault();
    submitAction();
  };

  return {
    values,
    getData,
    setData,
    submit,
  };
}


export function useTimer(initDuration){
  const countUpRef = useRef(null);
  const countDownRef = useRef(null);
  const [timer,setTimer] = useState(0);
  const [isPaused,setIsPaused] = useState(false);
  const [duration,setDuration] = useState(0);

  const start = ()=>{
    initDuration = Date.now() + (1000*60*initDuration);
    setTimer(initDuration - Date.now());
    setDuration(initDuration);

    countDownRef.current = countDown();
    console.log("====Count down ref",countDownRef.current);
  }

  function countDown(){
    return setInterval(() => {
      setTimer((timer) => timer - 1000)
      console.log("========Counting Down")
    }, 1000);
  }

  function countUp(){
    return setInterval(() => {
      setDuration((duration) => duration + 1000);
      console.log("========Counting up")
    }, 1000);
  }

  const pause = ()=>{
    console.log("======Clearing count down:",countDownRef.current)
    clearInterval(countDownRef.current);
    countUpRef.current = countUp();
    console.log("==========cout up ref", countUpRef.current)
    setIsPaused(true)
  }

  const resume = ()=>{
    console.log("======Clearing count up: ",countUpRef.current)
    clearInterval(countUpRef.current);
    setTimer(duration - Date.now());
    countDownRef.current = countDown();
    console.log("==========cout down ref", countUpRef.current)
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
    pause, start, resume, timer
  }
}