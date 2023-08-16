import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetings } from '../redux/greetings/greetingsSlice';

function Greeting() {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greetings.greetings);
  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);

  return (
    <div>
      <h2>{greeting.content}</h2>
    </div>
  );
}

export default Greeting;
