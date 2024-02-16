import { useDispatch, useSelector,  } from "react-redux";
import { decrement, increment, incrementByValue } from "../Redux/Features/Counter/CounterSlise";

const Counter = () => {
   const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

    console.log(count); 
    return (
      <div>
        <div className="w-full  flex justify-center items-center ">
          <div className="w-[400px] h-[400px] bg-[#f8f4ff] rounded-ful mt-28">
            <button onClick={() => dispatch(incrementByValue(5))}>Increment By 5</button>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <div>
              <h1>{count}</h1>
            </div>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
          </div>
        </div>
      </div>
    );
};

export default Counter; 