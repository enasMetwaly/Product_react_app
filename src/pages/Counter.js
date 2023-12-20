import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, incrementByValue, incrementCounter } from '../store/slices/counter';

export default function Counter() {
    const counter = useSelector(state => state.counter.counter_val);
    const dispatch = useDispatch();
    return (
       <>
       <h1>Counter</h1>
        <div className='d-flex'>
            <button className='btn btn-danger' onClick={() => dispatch(decrementCounter())}> - </button>
            <h4 className='mx-4'>{counter}</h4>
            <button className='btn btn-success' onClick={() => dispatch(incrementCounter())}> + </button>
            <button className='btn btn-info mx-4' onClick={() => dispatch(incrementByValue(2))}> +2 </button>
            <button className='btn btn-info mx-4' onClick={() => dispatch(incrementByValue(5))}> +5 </button>
        </div>
       </>
    )
}
