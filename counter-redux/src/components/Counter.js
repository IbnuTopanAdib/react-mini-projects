import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from './store/counter';

const Counter = () => {

  const counter = useSelector(state => state.counter.value); // ditambahin key counter karena reducernya namanya counter
  const showCounter = useSelector(state => state.counter.showCounter)
  const dispatch = useDispatch();

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  }
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  }

  const incrementByAmount = () => {
    dispatch(counterActions.increase(5))
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {
        showCounter && <div className={classes.value}>{counter}</div>
      }
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementByAmount}>Increment by 5</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
