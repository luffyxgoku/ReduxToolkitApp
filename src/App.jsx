import { useSelector, useDispatch } from "react-redux";

import { increment, decrement } from "./redux/counter/conterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        {count}
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
    </>
  );
}

export default App;
