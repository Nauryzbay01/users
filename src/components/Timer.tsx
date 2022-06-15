import React, {FC, useEffect, useRef, useState} from 'react';
import {Player} from "../models/Player";
import {Colors} from "../models/Colors";
import mus from "../assets/clo.mp3" ;
interface TimerProps {
  currentPlayer: Player | null;
  restart: () => void;
}
const music = new Audio(mus);
const Timer: FC<TimerProps> = ({currentPlayer, restart}) => {
  const [blackTime, setBlackTime] = useState(1000)
  const [whiteTime, setWhiteTime] = useState(1000);
  const timer = useRef<null | ReturnType<typeof setInterval>>(null)

  useEffect(() => {
    startTimer()
  }, [currentPlayer])

  function startTimer() {
    if (timer.current) {
      clearInterval(timer.current)
    }
    const callback = currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer
    timer.current = setInterval(callback, 1000)
  }

  function decrementBlackTimer() {
    setBlackTime(prev => prev - 1)
  }
  function decrementWhiteTimer() {
    setWhiteTime(prev => prev - 1)
  }

  const handleRestart = () => {
    setWhiteTime(1000)
    // setBlackTime(1000)
    // music.play();
    restart()
    
  } 

  return (
    <div className='timer-block'>
      
      <div className='colors'>
        <h2>Черные - {blackTime}</h2>
        <h2>Белые - {whiteTime}</h2>
      </div>
      <div>
        <button className='timer-block__button' onClick={handleRestart}>Restart game</button>
      </div>
    </div>
  );
};

export default Timer;
