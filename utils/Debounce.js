import {useEffect, useState, useRef, useCallback} from 'react';
// import TimeOut from './timeout';

 const Debounce =(callback,delay,dependencies)=> {
    // const [state, setState] = useState(defaultValue);
    // const [count, setCount] = useState(10)
    // const [TimerFunction, setTimer, clearTimer, reset] = TimeOut(callBack, delay);
    console.log(dependencies)
    const timeoutRef= useRef();
    const callbackRef = useRef(callback);
    const setTimer = useCallback(()=>{timeoutRef.current=setTimeout(()=>{callbackRef.current()},delay)},[delay]);
    const clearTimer=useCallback(()=>{timeoutRef.current && clearTimeout(timeoutRef.current)},[])

    useEffect(() => {
      callbackRef.current = callback
    }, [callback]);
    
  const reset = useCallback(() => {
    clearTimer()
    setTimer()
  }, [clearTimer, setTimer])

  // useEffect(()=>{setTimer(); return clearTimer},[delay]);

  useEffect(reset, [dependencies])
  useEffect(clearTimer, [])  
 
  return [setTimer, clearTimer,reset]
}

export default Debounce