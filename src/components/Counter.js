import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';
import {counterActions} from '../store/counter';

const Counter = () => {
  const counter=useSelector(state=>state.counter.counter)
  const toggleCounter=useSelector(state=>state.counter.toggleCounter)
  const dispatch=useDispatch();
  const incrementHandler=()=>{  
    dispatch(counterActions.increment());
  }
  const decrementHandler=()=>{
    dispatch(counterActions.decrement());
  }
  const increase=()=>{
    dispatch(counterActions.increase(5));
  }
  const toggleCounterHandler=()=>{
    dispatch(counterActions.toggleCounter())
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggleCounter&&<div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increase}>Increase By 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
